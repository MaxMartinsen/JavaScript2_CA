import { POSTS_ENDPOINT, PROFILES_ENDPOINT } from '/src/js/api/url.mjs';
import { get } from "/src/js/request/get.mjs";

const QUERY_PARAMETERS = '?_author=true&_comments=true&_reactions=true';

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
