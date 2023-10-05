/**
 * Displays a list of posts associated with a specific user profile.
 * @module display/displayPostsByProfile
 * @async
 * @function
 * @param {string} userName - The username of the profile whose posts are to be displayed.
 * @throws Will throw an error if there's an issue fetching the posts or rendering them.
 */
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