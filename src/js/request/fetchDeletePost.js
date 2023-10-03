import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.js';

export async function fetchDeletePost(postId) {
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
