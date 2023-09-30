import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.js';

export async function fetchGetPostById(postId) {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    // Add the flags to the URL to get more data
    const postUrl = `${API_BASE_URL}${API_VERSION}${POSTS_ENDPOINT}/${postId}?_author=true&_comments=true&_reactions=true`;

    const response = await fetch(postUrl, {
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


