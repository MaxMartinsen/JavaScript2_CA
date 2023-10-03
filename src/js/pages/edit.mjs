import { editPost } from "/src/js/form/post/editPost.mjs";
import { displayPostForEdit } from "/src/js/display/displayPostForEdit.mjs";

document.addEventListener('DOMContentLoaded', () => {
    displayPostForEdit();
    editPost();
});