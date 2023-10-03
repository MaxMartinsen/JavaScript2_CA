import { fetchGetPostById } from "../request/fetchGetPostById.js";
import { formatDateAndTime, formatTags } from "/src/js/utils/utils.mjs";


export async function displayPost() {
    try {
        // Extract the post ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const postId = Number(urlParams.get('postId'));

        if (!postId) {
            console.error('Invalid post ID');
            return;
        }

        // Fetch the post by its ID
        const post = await fetchGetPostById(postId);

        // Retrieve the current user's ID
        const currentUserId = getCurrentUserId();

        // Define necessary variables
        const postTitle = post.title ? `<h3>${post.title}</h3>` : '';
        const postAuthor = post.author?.name || "Unknown Author";
        const userAvatar = post.author?.avatar || "../../images/img/avatar/default-avatar.jpg";
        const postImage = post.media ? `<img src="${post.media}" alt="Post Image" class="img-fluid rounded mb-3">` : '';
        const postCreated = formatDateAndTime(post.created);
        const postTags = post.tags ? `<h6 class="text-white">${formatTags(post.tags).join(', ')}</h6>` : '';


        // Render the post details
        const postHTML = `
        <div class="col-12">
            <div class="card mb-5 bg-primary border-dark-subtle">
                <div class="card-header d-flex align-items-center justify-content-between text-light bg-primary border-bottom border-dark-subtle">
                    <div class="d-flex align-items-center">
                        <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                            <img src="${userAvatar}" alt="Profile Avatar" class="h-100">
                        </div>
                        <div class="ms-3">
                            <h6 class="mb-0">${postAuthor}</h6>
                            <small>${postCreated}</small>
                        </div>
                    </div>
                    <div class="d-flex">
                        <button class="btn list-item border-0"><span><i class="fa-regular fa-star fa-lg"></i></span></button>
                    </div>
                </div>
                <div class="card-body">
                    ${postTitle}
                    ${postImage}
                    <h4 class="mb-0">${post.body}</h4>
                    ${postTags}
                </div>
                <div class="card-footer d-flex justify-content-between text-white border-top border-dark-subtle bg-info">
                    <span><i class="far fa-thumbs-up"></i> ${post._count.reactions} Likes</span>
                    <span><i class="far fa-comment"></i> ${post._count.comments} Comments</span>
                    <span><i class="far fa-share-square"></i> Share</span>
                </div>
            </div>
        </div>
        `;

        const container = document.querySelector('.post');
        container.innerHTML = postHTML;

        // If you have additional interactions on this page, add them here

    } catch (error) {
        console.error('Error displaying post:', error);
    }
};

function getCurrentUserId() {
    return localStorage.getItem('userId');
};