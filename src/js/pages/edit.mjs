/**
 * Once the DOM is fully loaded, this script initializes the edit page by displaying
 * the post for editing and setting up the post edit functionality.
 * @module pages/edit
 * Display the post details for editing.
 * displayPostForEdit();
 * Initialize the post editing functionality.
 * editPost();
 */

import { editPost } from "/src/js/form/post/editPost.mjs";
import { displayPostForEdit } from "/src/js/display/displayPostForEdit.mjs";

document.addEventListener('DOMContentLoaded', () => {
    displayPostForEdit();
    editPost();
});