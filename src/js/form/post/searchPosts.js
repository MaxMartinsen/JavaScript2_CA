import { displayPosts } from '../../display/displayPosts.js';
import { fetchGetPosts } from '/src/js/request/fetchGetPosts.js';

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