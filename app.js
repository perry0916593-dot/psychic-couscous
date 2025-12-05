// ================================
// SOCIAL APP MAIN SCRIPT
// ================================

// Load posts from localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// ----------------------
// SAVE POSTS
// ----------------------
function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

// ----------------------
// CREATE POST
// ----------------------
function createPost(text) {
    if (text.trim() === "") return;

    const post = {
        id: Date.now(),
        text: text,
        likes: 0,
        comments: []
    };

    posts.unshift(post);
    savePosts();
}

// ----------------------
// LIKE POST
// ----------------------
function likePost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        post.likes++;
        savePosts();
        loadPosts();
    }
}

// ----------------------
// ADD COMMENT
// ----------------------
function addComment(id, comment) {
    if (comment.trim() === "") return;

    const post = posts.find(p => p.id === id);
    if (post) {
        post.comments.push(comment);
        savePosts();
        loadPosts();
    }
}

// ----------------------
// DISPLAY POSTS ON HOME PAGE
// ----------------------
function loadPosts() {
    const container = document.getElementById("post-container");
    if (!container) return;

    container.innerHTML = "";

    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <p>${post.text}</p>
            <div class="post-actions">
                <button onclick="likePost(${post.id})">❤️ ${post.likes}</button>
                <button onclick="toggleComments(${post.id})">💬 ${post.comments.length}</button>
            </div>

            <div class="comments" id="comments-${post.id}" style="display:none;">
                <div class="comment-list">
                    ${post.comments.map(c => `<p>• ${c}</p>`).join("")}
                </div>
                <input type="text" id="comment-input-${post.id}" placeholder="Add comment...">
                <button onclick="submitComment(${post.id})">Send</button>
            </div>
        `;

        container.appendChild(div);
    });
}

function toggleComments(id) {
    const box = document.getElementById(`comments-${id}`);
    box.style.display = box.style.display === "none" ? "block" : "none";
}

function submitComment(id) {
    const input = document.getElementById(`comment-input-${id}`);
    addComment(id, input.value);
    input.value = "";
}

// Load posts on page open
document.addEventListener("DOMContentLoaded", loadPosts);
