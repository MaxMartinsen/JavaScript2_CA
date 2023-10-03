import { createPost } from "../form/post/createPost.mjs";
import { displayPosts } from "../display/displayPosts.mjs";
import { setupFilterListeners } from "/src/js/utils/utils.mjs";
import { searchPosts } from "../form/post/searchPosts.mjs";

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