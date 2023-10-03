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