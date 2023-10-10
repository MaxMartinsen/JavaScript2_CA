import { displayPost } from "/src/js/display/displayPost.mjs";
/**
 * @module pages/post
 * Once the DOM is fully loaded, this script initializes the post page by invoking
 * the displayPost function to render the post details.
 */
document.addEventListener('DOMContentLoaded', async function() {
    displayPost();

});