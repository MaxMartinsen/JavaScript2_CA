import { fetchGetPostById } from "/src/js/request/fetch.mjs";
/**
 * @module display/displayPostForEdit
 * Displays a post in a form for editing.
 * Extracts the post ID from the URL, fetches the post by its ID, and populates the form fields with the post data.
 * @async
 * @function
 * @throws Will throw an error if there's an issue fetching the post or if the post ID is invalid.
 */
export async function displayPostForEdit() {

    try {
        // Extract the post ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const postId = Number(urlParams.get('postId'));

        if (!postId || isNaN(postId)) {
            console.error('Invalid post ID');
            return;
        }

        // Fetch the post by its ID
        const post = await fetchGetPostById(postId);

        // Get references to the form fields
        const postTitle = document.getElementById('title');
        const postBody = document.getElementById('body');
        const postTags = document.getElementById('tags');
        const postMedia = document.getElementById('media');

        // Populate the form fields with the post data
        if (post?.title) postTitle.value = post.title;
        if (post?.body) postBody.value = post.body;
        if (post?.tags.length > 0) postTags.value = post?.tags.join(', ');
        if (post?.media) postMedia.value = post.media;

    } catch (error) {
        console.error('Error displaying post for edit:', error);
    }
};