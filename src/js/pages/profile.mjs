import { PROFILES_ENDPOINT } from '/src/js/api/url.mjs';
import { get } from '/src/js/request/request.mjs';

document.addEventListener('DOMContentLoaded', async function() {
    // Get the access token and user's name from local storage
    const accessToken = localStorage.getItem('accessToken');
    const userName = localStorage.getItem('userName');

    // Check if the user is authenticated and if the user's name is available
    if (!accessToken || !userName) {
        console.error("User is not authenticated or user's name is missing!");
        return;
    }

    // Define the API endpoint to fetch the profile data based on the user's name
    const profileEndpoint = `${PROFILES_ENDPOINT}/${userName}`;

    try {
        const data = await get(profileEndpoint);
        const profileNameElements = document.querySelectorAll("#text-singleEntryName");
        profileNameElements.forEach(element => {
            element.textContent = data.name;
        });
    } catch (error) {
        console.error("There was an error fetching the profile data:", error.message || error);
    }
});