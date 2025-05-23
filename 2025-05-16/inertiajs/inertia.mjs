import fp from "fastify-plugin";

const kLazy = Symbol("InertiaLazy");
const globallyShared = {};

// Kodus to https://github.com/monterocms/fastify-inertia
class Inertia {
  static lazy(value) {
    return {
      [kLazy]: true,
      value,
    };
  }

  static share(key, value) {
    globallyShared[key] = value;
  }

  constructor({ request, reply, options, version }) {
    this.request = request;
    this.reply = reply;
    this.options = options ?? {};
    this.version = version;
    this.sharedProps = {};
    this.viewProps = {};
  }

  share(key, value) {
    this.sharedProps[key] = value;
  }

  flushShared() {
    this.sharedProps = {};
  }

  async render(component, data = {}) {
    const props = await this._resolveProps(data);
    const page = {
      component,
      props,
      url: this.request.url,
      version: this.version,
    };

    if (this.request.headers["x-inertia"]) {
      return this.reply
        .headers({
          "x-inertia": true,
          "x-inertia-version": this.version,
        })
        .send(page);
    }

    const result = await this.options.renderRootView(
      {
        ...this.viewProps,
        page: JSON.stringify(page)
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;"),
      },
      this.request
    );

    if (typeof result === "string") {
      this.reply.type("text/html");
    }

    return this.reply
      .headers({
        "x-inertia": true,
        "x-inertia-version": this.version,
      })
      .send(result);
  }

  location(url) {
    return this.reply
      .status(409)
      .headers({
        "x-inertia": true,
        "x-inertia-location": url ?? this.request.url,
      })
      .send("");
  }

  redirect(url) {
    return this.reply.redirect(url ?? this.request.headers.url);
  }

  async _resolveProps(renderProps) {
    const resolvedProps = {};
    const allProps = {
      ...globallyShared,
      ...this.options.share?.(),
      ...this.sharedProps,
      ...renderProps,
    };

    const propKeys = this.request.headers["x-inertia-partial-data"]
      ? this.request.headers["x-inertia-partial-data"].split(",")
      : Object.keys(allProps);

    // @TODO: walk down nested objects and arrays to omit lazy keys
    propKeys.forEach(async (propKey) => {
      // Check if the prop needs to be resolved (partial reloads)
      if (typeof allProps[propKey] === "function") {
        resolvedProps[propKey] = await allProps[propKey]();
      }

      // Check if the prop is lazy (partial reloads)
      if (allProps[propKey] && allProps[propKey][kLazy]) {
        resolvedProps[propKey] = allProps[propKey].value;
      }

      resolvedProps[propKey] = allProps[propKey];
    });

    return resolvedProps;
  }
}

function plugin(fastify, options, next) {
  fastify.addHook("onRequest", async function (request, reply) {
    const version = await options.resolveAssetVersion(request);
    const inertia = new Inertia({ request, reply, options, version });

    if (
      request.method === "GET" &&
      request.headers["x-inertia"] &&
      request.headers["x-inertia-version"] !== version
    ) {
      return inertia.location(request.url);
    }

    request.inertia = inertia;
    reply.inertia = inertia;
  });

  fastify.addHook("onSend", async (request, reply) => {
    if (
      request.headers["x-inertia"] &&
      ["PUT", "PATCH", "DELETE"].includes(request.method)
    ) {
      reply.code(303);
    }
  });

  next();
}

const fastifyInertia = fp(plugin, {
  fastify: "5.x",
  name: "fastify-inertia",
});

export default fastifyInertia;