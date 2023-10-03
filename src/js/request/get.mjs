import { API_BASE_URL, API_VERSION } from '/src/js/api/url.mjs';

const QUERY_PARAMETERS = '?_author=true&_comments=true&_reactions=true';

export async function get(endpoint, queryParameters = '') {
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
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};
