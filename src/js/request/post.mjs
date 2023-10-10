import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.mjs';
/**
 * Sends a POST request to the specified endpoint with the provided data.
 * 
 * @param {Object} data - The data to be sent in the body of the POST request.
 * @returns {Promise<Object>} - Returns a promise that resolves with the response data.
 * @throws {Error} - Throws an error if the user is not authenticated or if the HTTP request fails.
 */
export async function post(data) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    const postUrl = `${API_BASE_URL}${API_VERSION}${POSTS_ENDPOINT}`;

    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Server response:", errorDetails);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    

    return await response.json();
};