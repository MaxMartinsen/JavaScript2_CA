import { fetchPostPosts } from "/src/js/request/fetchPostPosts.js";
import { displayPosts } from "/src/js/display/displayPosts.js";
import { formatTags } from "/src/js/components/formatTag.js";

export async function createPost() {
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const titleElement = document.getElementById('postTitle');
        const bodyElement = document.getElementById('postBody');
        const mediaElement = document.getElementById('postMedia');
        const tagsElement = document.getElementById('postTags'); 

        const title = titleElement.value;
        const body = bodyElement.value;
        const media = mediaElement.value;
        const tagsRaw = tagsElement.value.split(',');
        let tags = document.getElementById('postTags').value.split(/[\s,]+/).filter(tag => tag).map(tag => tag.trim());
        tags = formatTags(tags);


        // Validate the post body length
        if (body.length > 280) {
            alert('Your post is too long! Please keep it under 280 characters.');
            return;
        }

        const postData = {
            title: title,
            body: body,
            media: media,
            tags: tags
        };

        try {
            const response = await fetchPostPosts(postData);
            console.log('Post created:', response);

            // Reset the form
            titleElement.value = '';
            bodyElement.value = '';
            mediaElement.value = '';
            tagsElement.value = '';

            // Update the post display
            displayPosts();

        } catch (error) {
            console.error('Error creating post:', error);
        }
    });
};
