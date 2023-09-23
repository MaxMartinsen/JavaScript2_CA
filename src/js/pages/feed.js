import { createPost } from "../form/post/createPost.js";
import { fetchPosts } from '../form/post/fetchPosts.js';

document.addEventListener('DOMContentLoaded', async function() {
    // Handle post creation
    const postForm = document.getElementById('postForm');
    postForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const title = document.getElementById('postTitle').value;
        const body = document.getElementById('floatingTextarea').value;

        const postData = {
            title: title,
            body: body,
        };

        try {
            const response = await createPost(postData);
            console.log('Post created:', response);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    });

    // Fetch and display posts
    try {
        const posts = await fetchPosts();

        const postsHTML = posts.map(post => {
            const postImage = post.media || "../../images/img/avatar/default-avatar.jpg";
            return `
                <div class="col-12">
                    <div class="card mb-5 bg-primary border-dark-subtle">
                        <div class="card-header d-flex align-items-center text-light bg-primary border-bottom border-dark-subtle">
                            <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                                <img src="../../images/img/avatar/default-avatar.jpg" alt="Profile Avatar" class="h-100">
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0">${post.title}</h6>
                                <small>${post.created}</small>
                            </div>
                        </div>
                        <div class="card-body">
                            <img src="${postImage}" alt="Post Image" class="img-fluid rounded mb-3">
                            <h4 class="mb-0">${post.body}</h4>
                        </div>
                        <div class="card-footer d-flex justify-content-between text-white border-top border-dark-subtle bg-info">
                            <span><i class="far fa-thumbs-up"></i> ${post._count.reactions} Likes</span>
                            <span><i class="far fa-comment"></i> ${post._count.comments} Comments</span>
                            <span><i class="far fa-share-square"></i> Share</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const container = document.querySelector('.posts');
        container.innerHTML = postsHTML;

    } catch (error) {
        console.error('Error fetching posts:', error);
    }
});
