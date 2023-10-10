import { PROFILES_ENDPOINT } from '/src/js/api/url.mjs';
import { get } from '/src/js/request/request.mjs';
import { displayPostsByProfile } from '/src/js/display/displayPostsByProfile.mjs';
import { setupFilterListeners } from "/src/js/utils/utils.mjs";
import { searchPosts } from "/src/js/form/posts/searchPosts.mjs";
/**
 * @module pages/profile
 * Once the DOM is fully loaded, this script initializes the profile page.
 * It retrieves the user's access token and name from local storage, checks if the user is authenticated,
 * and then fetches and displays the user's profile data and posts.
 */
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

        // Display all posts by the profile
        displayPostsByProfile(userName);

        // Setup filter listeners
        setupFilterListeners(() => displayPostsByProfile(userName));

        // Setup search functionality
        document.getElementById('searchButton').addEventListener('click', async function() {
            const query = document.getElementById('searchInput').value;
            if (query) {
                searchPosts(query);
            }
        });

    } catch (error) {
        console.error("There was an error fetching the profile data:", error.message || error);
    }
});
