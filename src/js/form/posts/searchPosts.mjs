/**
 * Searches for posts based on a given query. The search checks if the query exists
 * in the post's title or body. The results are then displayed using the `displayPosts` function.
 * @module form/posts/searchPosts
 * @function
 * @param {string} query - The search term used to filter posts.
 * @throws Will log an error to the console if there's an issue during the search.
 */
import { displayPosts } from '/src/js/display/displayPosts.mjs';
import { fetchGetPosts } from '/src/js/request/fetch.mjs';

export async function searchPosts(query) {
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