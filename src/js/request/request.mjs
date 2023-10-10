/**
 * Centralized request module.
 * This module re-exports functions from other request-related modules to provide a unified interface for making HTTP requests.
 * 
 * @module request
 */

/** 
 * Authenticates a user.
 * @function
 * @name authUser
 * @see module:/src/js/request/auth.mjs
 */
export { authUser } from "/src/js/request/auth.mjs";

/** 
 * Sends a GET request to the specified endpoint.
 * @function
 * @name get
 * @see module:/src/js/request/get.mjs
 */
export { get } from "/src/js/request/get.mjs";

/** 
 * Sends a PUT request to the specified endpoint with the provided data.
 * @function
 * @name put
 * @see module:/src/js/request/put.mjs
 */
export { put } from "/src/js/request/put.mjs";

/** 
 * Sends a DELETE request to the specified endpoint.
 * @function
 * @name del
 * @see module:/src/js/request/delete.mjs
 */
export { del } from "/src/js/request/delete.mjs";

/** 
 * Sends a POST request to the specified endpoint with the provided data.
 * @function
 * @name post
 * @see module:/src/js/request/post.mjs
 */
export { post } from "/src/js/request/post.mjs";