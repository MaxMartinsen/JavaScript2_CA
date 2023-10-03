import { API_BASE_URL, API_VERSION, PROFILES_ENDPOINT } from '/src/js/api/url.mjs';

export async function fetchProfiles() {
    const profilesUrl = `${API_BASE_URL}${API_VERSION}${PROFILES_ENDPOINT}`;
    const token = localStorage.getItem('accessToken');

    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(profilesUrl, fetchOptions);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}
