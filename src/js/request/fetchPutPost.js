import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.js';

export async function fetchPutPost(postId, postData) {
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

