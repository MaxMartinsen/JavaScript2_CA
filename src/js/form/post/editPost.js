import { fetchPutPost } from "/src/js/request/fetchPutPost.js";
import { formatTags } from "/src/js/components/formatTag.js";

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
            const updatedPost = await fetchPutPost(postId, { title, body, media, tags });
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

