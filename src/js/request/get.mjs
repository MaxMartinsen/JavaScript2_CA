import { API_BASE_URL, API_VERSION } from '/src/js/api/url.mjs';

/**
 * Sends a GET request to the specified endpoint and returns the response data.
 * 
 * @async
 * @function
 * @param {string} endpoint - The API endpoint to which the GET request should be sent.
 * @param {string} [queryParameters='?_author=true&_comments=true&_reactions=true'] - Additional query parameters to be appended to the endpoint.
 * @returns {Promise<Object>} - Returns a promise that resolves with the response data.
 * @throws {Error} - Throws an error if the user is not authenticated or if the HTTP request fails.
 */
export async function get(endpoint, queryParameters = '?_author=true&_comments=true&_reactions=true') {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    const url = `${API_BASE_URL}${API_VERSION}${endpoint}${queryParameters}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        return response.json().then(err => {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${err.message || 'Unknown error'}`);
        });
    }

    return await response.json();
};