import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.js';

export async function fetchPosts() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    const url = `${API_BASE_URL}${API_VERSION}${POSTS_ENDPOINT}`;

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
}