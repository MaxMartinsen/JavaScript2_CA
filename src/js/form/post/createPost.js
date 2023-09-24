import { fetchPostPosts } from "../../request/fetchPostPosts.js";

export async function createPost() {
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('postTitle').value;
        const body = document.getElementById('postBody').value;

        const postData = {
            title: title,
            body: body,
        };

        try {
            const response = await fetchPostPosts(postData);
            console.log('Post created:', response);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    });
}