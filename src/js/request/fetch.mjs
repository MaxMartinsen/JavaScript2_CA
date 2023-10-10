import { POSTS_ENDPOINT, PROFILES_ENDPOINT, QUERY_PARAMETERS } from '/src/js/api/url.mjs';
import { get } from "/src/js/request/request.mjs";
/**
 * Fetches a post by its ID.
 *
 * @param {string|number} postId - The ID of the post to be fetched.
 * @returns {Promise<Object>} - A promise that resolves to the fetched post.
 */

export async function fetchGetPostById(postId) {
    const endpoint = `${POSTS_ENDPOINT}/${postId}`;
    return await get(endpoint, QUERY_PARAMETERS);
}

export async function fetchGetPosts() {
    return await get(POSTS_ENDPOINT, QUERY_PARAMETERS);
}

export async function fetchGetProfiles() {
    return await get(PROFILES_ENDPOINT);
}