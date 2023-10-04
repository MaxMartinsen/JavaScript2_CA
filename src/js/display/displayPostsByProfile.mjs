import { PROFILES_ENDPOINT } from '/src/js/api/url.mjs';
import { get } from '/src/js/request/request.mjs';
import { displayPosts } from '/src/js/display/displayPosts.mjs';

export async function displayPostsByProfile(userName) {
    try {
        const endpoint = `${PROFILES_ENDPOINT}/${userName}/posts`;
        const posts = await get(endpoint);
        displayPosts(null, posts, userName);
    } catch (error) {
        console.error("Error displaying posts for profile:", error);
    }
};
