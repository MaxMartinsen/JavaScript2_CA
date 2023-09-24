import { createPost } from "../form/post/createPost.js";
import { displayPosts } from "../display/displayPosts.js";
import { setupFilterListeners } from "../components/setupFilterListeners.js";

document.addEventListener('DOMContentLoaded', async function() {
    createPost();
    displayPosts();
    setupFilterListeners(displayPosts);
});




/* import { createPost } from "../form/post/createPost.js";
import { fetchPosts } from '../form/post/fetchPosts.js';
import { formatDateAndTime } from "../components/formatDateAndTime.js";
import { setupFilterListeners } from './../components/setupFilterListeners';

document.addEventListener('DOMContentLoaded', async function() {
    // Handle post creation
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
            const response = await createPost(postData);
            console.log('Post created:', response);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    });

    async function displayPosts(filter = null) {
        try {
            let posts = await fetchPosts();
    
            if (filter === 'photo') {
                posts = posts.filter(post => post.media);
            } else if (filter === 'popular') {
                posts = posts.filter(post => post._count.reactions > 0);
            } else if (filter === 'tags') {
                posts = posts.filter(post => post.tags && post.tags.includes("string")); // Modify as per the tag you want to filter
            }
    
            const postsHTML = posts.map(post => {
                const postAuthor = post.author.name;
                const userAvatar = post.author.avatar || "../../images/img/avatar/default-avatar.jpg";
                const postImage = post.media ? `<img src="${post.media}" alt="Post Image" class="img-fluid rounded mb-3">` : '';
                const postCreated = formatDateAndTime(post.created);
                return `
                <div class="col-12">
                <div class="card mb-5 bg-primary border-dark-subtle">
                    <div class="card-header d-flex align-items-center text-light bg-primary border-bottom border-dark-subtle">
                        <div class="rounded-circle overflow-hidden" style="width: 50px; height: 50px;">
                            <img src="${userAvatar}" alt="Profile Avatar" class="h-100">
                        </div>
                        <div class="ms-3">
                            <h6 class="mb-0">${postAuthor}</h6>
                            <small>${postCreated}</small>
                        </div>
                    </div>
                    <div class="card-body">
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
    
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
    
    displayPosts(); // Initial display without any filter
    
    // Event listeners for filter buttons
    document.getElementById('filter-publications').addEventListener('click', (e) => {
        e.preventDefault();
        displayPosts();
        setActiveFilter('filter-publications');
    });
    document.getElementById('filter-photo').addEventListener('click', (e) => {
        e.preventDefault();
        displayPosts('photo');
        setActiveFilter('filter-photo');
    });
    document.getElementById('filter-popular').addEventListener('click', (e) => {
        e.preventDefault();
        displayPosts('popular');
        setActiveFilter('filter-popular');
    });
    document.getElementById('filter-tags').addEventListener('click', (e) => {
        e.preventDefault();
        displayPosts('tags');
        setActiveFilter('filter-tags');
    });
    
    function setActiveFilter(filterId) {
        const filters = ['filter-publications', 'filter-popular', 'filter-photo', 'filter-tags'];
        filters.forEach(id => {
            const filterElement = document.getElementById(id);
            filterElement.classList.remove('active');
        });
        document.getElementById(filterId).classList.add('active');
    }
    
}); */