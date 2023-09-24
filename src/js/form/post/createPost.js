import { fetchPostPosts } from "../../request/fetchPostPosts.js";
import { displayPosts } from "../../display/displayPosts.js";

export async function createPost() {
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const titleElement = document.getElementById('postTitle');
        const bodyElement = document.getElementById('postBody');

        const title = titleElement.value;
        const body = bodyElement.value;

        // Validate the post body length
        if (body.length > 280) {
            alert('Your post is too long! Please keep it under 280 characters.');
            return;
        }

        const postData = {
            title: title,
            body: body,
        };

        try {
            const response = await fetchPostPosts(postData);
            console.log('Post created:', response);

            // Reset the form
            titleElement.value = '';
            bodyElement.value = '';

            // Update the post display
            displayPosts();

        } catch (error) {
            console.error('Error creating post:', error);
        }
    });
};
