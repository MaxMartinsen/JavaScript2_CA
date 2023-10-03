import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.mjs';

const QUERY_PARAMETERS = '?_author=true&_comments=true&_reactions=true';

export async function fetchGetPosts() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('User is not authenticated');
    }

    const postsWithParametersUrl = `${API_BASE_URL}${API_VERSION}${POSTS_ENDPOINT}${QUERY_PARAMETERS}`;

    const response = await fetch(postsWithParametersUrl, {
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
