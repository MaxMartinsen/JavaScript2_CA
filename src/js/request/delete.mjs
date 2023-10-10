import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.mjs';
/**
 * Deletes a post by its ID.
 *
 * @param {string|number} postId - The ID of the post to be deleted.
 * @throws {Error} - Throws an error if the user is not authenticated or if the HTTP request fails.
 * @returns {Promise<void>} - A promise that resolves when the post is successfully deleted.
 */
export async function del(postId) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    const postUrl = `${API_BASE_URL}${API_VERSION}${POSTS_ENDPOINT}/${postId}`;

    const response = await fetch(postUrl, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete post');
    }
};