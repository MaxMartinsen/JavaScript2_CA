import { createPost } from "/src/js/form/post/createPost.mjs";
import { displayPosts } from "/src/js/display/displayPosts.mjs";
import { setupFilterListeners } from "/src/js/utils/utils.mjs";
import { searchPosts } from "/src/js/form/posts/searchPosts.mjs";

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