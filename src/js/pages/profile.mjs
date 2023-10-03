import { API_BASE_URL, API_VERSION, PROFILES_ENDPOINT } from '/src/js/api/url.mjs';

document.addEventListener('DOMContentLoaded', function() {
    // Get the access token and user's name from local storage
    const accessToken = localStorage.getItem('accessToken');
    const userName = localStorage.getItem('userName');

    // Check if the user is authenticated and if the user's name is available
    if (!accessToken || !userName) {
        console.error("User is not authenticated or user's name is missing!");
        return;
    }

    // Define the API endpoint to fetch the profile data based on the user's name
    const profileUrl = `${API_BASE_URL}${API_VERSION}${PROFILES_ENDPOINT}/${userName}`;

    // Fetch the profile data
    fetch(profileUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const profileNameElements = document.querySelectorAll("#text-singleEntryName");
        profileNameElements.forEach(element => {
            element.textContent = data.name;
        });
    })
    .catch(error => {
        console.error("There was an error fetching the profile data:", error);
    });
});
