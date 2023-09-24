import { fetchGetPosts } from "/src/js/request/fetchGetPosts.js";
import { formatDateAndTime } from "/src/js/components/formatDateAndTime.js";

export async function displayPosts(filter = null) {
    try {
        let posts = await fetchGetPosts();

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
