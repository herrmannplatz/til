import { queryParams, type QueryParams } from './../wayfinder';
/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
export const dashboard = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: dashboard.url(options),
    method: 'get',
});

dashboard.definition = {
    methods: ['get', 'head'],
    url: '/dashboard',
};

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.url = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}) => {
    return dashboard.definition.url + queryParams(options);
};

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: dashboard.url(options),
    method: 'get',
});

/**
 * @see routes/web.php:17
 * @route '/dashboard'
 */
dashboard.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: dashboard.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
export const register = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: register.url(options),
    method: 'get',
});

register.definition = {
    methods: ['get', 'head'],
    url: '/register',
};

/**
 * @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.url = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}) => {
    return register.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: register.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Auth\RegisteredUserController::register
 * @see app/Http/Controllers/Auth/RegisteredUserController.php:21
 * @route '/register'
 */
register.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: register.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
export const login = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: login.url(options),
    method: 'get',
});

login.definition = {
    methods: ['get', 'head'],
    url: '/login',
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.get = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'get';
} => ({
    url: login.url(options),
    method: 'get',
});

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:19
 * @route '/login'
 */
login.head = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'head';
} => ({
    url: login.url(options),
    method: 'head',
});

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
export const logout = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'post';
} => ({
    url: logout.url(options),
    method: 'post',
});

logout.definition = {
    methods: ['post'],
    url: '/logout',
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.url = (options?: { query?: QueryParams; mergeQuery?: QueryParams }) => {
    return logout.definition.url + queryParams(options);
};

/**
 * @see \App\Http\Controllers\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Auth/AuthenticatedSessionController.php:42
 * @route '/logout'
 */
logout.post = (options?: {
    query?: QueryParams;
    mergeQuery?: QueryParams;
}): {
    url: string;
    method: 'post';
} => ({
    url: logout.url(options),
    method: 'post',
});
