import { editPost } from "/src/js/form/post/editPost.js";
import { displayPostForEdit } from "/src/js/display/displayPostForEdit.js";

document.addEventListener('DOMContentLoaded', () => {
    displayPostForEdit();  // Load the post data and populate the form
    editPost();  // Attach the form submission handler
});