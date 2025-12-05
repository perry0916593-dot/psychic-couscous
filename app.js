// NAVIGATION SYSTEM
const btns = document.querySelectorAll(".nav-btn");
const pageContent = document.getElementById("pageContent");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".nav-btn.active")?.classList.remove("active");
        btn.classList.add("active");

        let page = btn.dataset.page;

        if (page === "home") {
            pageContent.innerHTML = "<h2>Home</h2><p>Your TikTok-style feed will appear here.</p>";
        }

        if (page === "search") {
            pageContent.innerHTML = "<h2>Search</h2><p>Search feature coming soon.</p>";
        }

        if (page === "upload") {
            pageContent.innerHTML = "<h2>Upload</h2><p>Upload videos or photos.</p>";
        }

        if (page === "inbox") {
            pageContent.innerHTML = "<h2>Inbox</h2><p>Your messages will appear here.</p>";
        }

        if (page === "profile") {
            pageContent.innerHTML = "<h2>Profile</h2><p>Your profile info will show here.</p>";
        }
    });
});

// LIGHT / DARK MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
