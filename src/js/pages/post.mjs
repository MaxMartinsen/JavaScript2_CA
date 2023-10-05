/**
 * @module pages/post
 * Once the DOM is fully loaded, this script initializes the post page by invoking
 * the displayPost function to render the post details.
 */
import { displayPost } from "/src/js/display/displayPost.mjs";
document.addEventListener('DOMContentLoaded', async function() {
    displayPost();

});