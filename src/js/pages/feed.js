import { createPost } from "../form/post/createPost.js";
import { displayPosts } from "../display/displayPosts.js";
import { setupFilterListeners } from "/src/js/utils/utils.mjs";
import { searchPosts } from "../form/post/searchPosts.js";

document.addEventListener('DOMContentLoaded', async function() {
    createPost();
    displayPosts();
    setupFilterListeners(displayPosts);
    
    document.getElementById('searchButton').addEventListener('click', async function() {
        const query = document.getElementById('searchInput').value;
        if (query) {
            searchPosts(query);
        }
    });
});



