import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.mjs';
/**
 * Sends a PUT request to the specified endpoint with the provided post data.
 * 
 * @param {string|number} postId - The ID of the post to be updated.
 * @param {Object} postData - The data to be sent in the body of the PUT request.
 * @returns {Promise<Object>} - Returns a promise that resolves with the updated post data.
 * @throws {Error} - Throws an error if the user is not authenticated or if the HTTP request fails.
 */
export async function put(postId, postData) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    const postUrl = `${API_BASE_URL}${API_VERSION}${POSTS_ENDPOINT}/${postId}`;

    const response = await fetch(postUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(postData)
    });

    if (!response.ok) {
        throw new Error(`Failed to update post`);
    }

    return await response.json();
};