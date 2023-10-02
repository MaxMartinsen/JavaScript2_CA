import { fetchGetPosts } from "/src/js/request/fetchGetPosts.js";
import { formatDateAndTime } from "/src/js/components/formatDateAndTime.js";

export async function displayPosts(filter = null, searchResults = null) {
    try {
        let posts;
        if (searchResults) {
            posts = searchResults;
        } else {
            posts = await fetchGetPosts();
        }
        if (filter === 'photo') {
            posts = posts.filter(post => post.media);
        } else if (filter === 'popular') {
            posts = posts.filter(post => post._count.reactions > 0);
        } else if (filter === 'tags') {
            posts = posts.filter(post => post.tags && post.tags.includes("string"));
        }


        // Retrieve the current user's ID
        const currentUserName = getCurrentUserName();

        function getCurrentUserName() {
            return localStorage.getItem('userName');
        };

        function getActionButton(post, currentUserName) {
            if (post.author.name === currentUserName) {
                return `<button class="btn list-item border-0" data-action="edit" data-post-id="${post.id}"><span><i class="fa-regular fa-pen-to-square fa-lg"></i></span></button>`;
            } else {
                return `<button class="btn list-item border-0" data-action="info" data-post-id="${post.id}"><span><i class="fa-solid fa-info fa-lg"></i></span></button>`;
            }
        }

        const postsHTML = posts.map(post => {
            const postAuthor = post.author.name;
            const userAvatar = post.author.avatar || "../../images/img/avatar/default-avatar.jpg";
            const postImage = post.media ? `<img src="${post.media}" alt="Post Image" class="img-fluid rounded mb-3">` : '';
            const postCreated = formatDateAndTime(post.created);
            const postTitle = post.title ? `<h3>${post.title}</h3>` : '';
        
            // Determine which button to display
            const actionButton = getActionButton(post, currentUserName);
        
            return `
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
                            ${actionButton}
                            <button class="btn list-item border-0"><span><i class="fa-regular fa-star fa-lg"></i></span></button>
                        </div>
                    </div>
                    <div class="card-body">
                        ${postTitle}
                        ${postImage}
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

        // Add event listeners for the "info" buttons
        container.querySelectorAll('button[data-action="info"]').forEach(button => {
            button.addEventListener('click', (e) => {
                const postId = e.target.closest('button').getAttribute('data-post-id');
                window.location.href = `/src/pages/post/index.html?postId=${postId}`;
            });
        });

        // Add event listeners for the "edit" buttons
        container.querySelectorAll('button[data-action="edit"]').forEach(button => {
            button.addEventListener('click', (e) => {
                const postId = e.target.closest('button').getAttribute('data-post-id');
                if (postId) {
                    window.location.href = `/src/pages/edit/index.html?postId=${postId}`;
                } else {
                    console.error('Failed to retrieve post ID for editing');
                }
            });
        });

    } catch (error) {
        console.error('Error displaying posts:', error);
    }
};