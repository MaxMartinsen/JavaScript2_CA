import { editPost } from "/src/js/form/post/editPost.js";
import { displayPostForEdit } from "/src/js/display/displayPostForEdit.js";

document.addEventListener('DOMContentLoaded', () => {
    displayPostForEdit();
    editPost();
});