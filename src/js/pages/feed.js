import { createPost } from "../form/post/createPost.js";
import { displayPosts } from "../display/displayPosts.js";
import { setupFilterListeners } from "../components/setupFilterListeners.js";
import { fetchGetPosts } from "../request/fetchGetPosts.js";

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

async function searchPosts(query) {
    try {
        const allPosts = await fetchGetPosts();
        const searchResults = allPosts.filter(post => 
            (post.title && post.title.includes(query)) || 
            (post.body && post.body.includes(query))
        );
        displayPosts(null, searchResults);
    } catch (error) {
        console.error('Error searching posts:', error);
    }
}



