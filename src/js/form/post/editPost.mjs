/**
 * Initializes the post editing process by attaching an event listener to the edit post form.
 * When the form is submitted, it formats the tags, sends a request to update the post, and
 * redirects to the feed page. If there's an error during post updating, it logs the error.
 * @module form/post/editPost
 * @function
 * @throws Will log an error to the console if there's an issue during post updating.
 * Extracts the post ID from the current URL.
 * @function
 * @returns {string|null} The post ID if present in the URL, otherwise null.
 */

import { put } from "/src/js/request/request.mjs";
import { formatTags } from "/src/js/utils/utils.mjs";

export function editPost() {
    const form = document.getElementById('editPostForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        const media = document.getElementById('media').value;
        let tags = document.getElementById('tags').value.split(/[\s,]+/).filter(tag => tag).map(tag => tag.trim());
        tags = formatTags(tags);


        // Format the tags
        tags = formatTags(tags);

        const postId = getPostIdFromURL();

        try {
            const updatedPost = await put(postId, { title, body, media, tags });
            window.location.href = '/src/pages/feed/index.html';
        } catch (error) {
            console.error('Error updating post:', error);
        }
    });
};

function getPostIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('postId');
};