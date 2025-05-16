import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'

import Fastify from 'fastify'
import FastifyStatic from '@fastify/static'
import FastifyInertia from './inertia.mjs'

const root = path.join(import.meta.dirname, 'dist')
const manifest = path.join(root, '.vite/manifest.json')

const fastify = Fastify({ logger: true})

fastify.register(FastifyStatic, { root })

fastify.register(FastifyInertia, {
  async resolveAssetVersion() {
    const file = await readFile(manifest, { encoding: "utf8" })
    return createHash('md5').update(file).digest("hex")
  },
  async renderRootView(context) {
    const { default: files } = await import(manifest, { with: { type: "json" }});
    return `
      <html>
        <head>
          <title></title>
          <script defer src="${files['src/main.js'].file}"></script>
        </head>
        <body>
          <div id="app" data-page='${context.page}'></div>
        </body>
      </html>
    `;
  },
});

fastify.get('/', (_, reply) => {
  return reply.inertia.render("Home", { msg: "This is the settings page" });
})

fastify.get('/settings', (_, reply) => {
  return reply.inertia.render("Settings", { msg: "This is the settings page" });
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
