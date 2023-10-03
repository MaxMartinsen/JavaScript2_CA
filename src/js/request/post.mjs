import { API_BASE_URL, API_VERSION, POSTS_ENDPOINT } from '/src/js/api/url.mjs';

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