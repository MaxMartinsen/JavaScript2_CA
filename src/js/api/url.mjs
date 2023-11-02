/**
 * Base URL for the API.
 * @type {string}
 */
export const API_BASE_URL = 'https://api.noroff.dev';

/**
 * API version endpoint.
 * @type {string}
 */
export const API_VERSION = '/api/v1';

/**
 * Endpoint for user registration.
 * @type {string}
 */
export const REGISTER_ENDPOINT = '/social/auth/register';

/**
 * Endpoint for user login.
 * @type {string}
 */
export const LOGIN_ENDPOINT = '/social/auth/login';

/**
 * This endpoint returns all posts in an array.
 * @type {string}
 */
export const POSTS_ENDPOINT = '/social/posts';

/**
 * This endpoint returns all profile in an array.
 * @type {string}
 */
export const PROFILES_ENDPOINT = '/social/profiles';

/**
 * Common query parameters to be used with API requests.
 * These parameters are used to fetch additional related data like author, comments, and reactions.
 * @type {string}
 */
export const QUERY_PARAMETERS = '?_author=true&_comments=true&_reactions=true';