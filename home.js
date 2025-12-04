auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("userEmail").innerText = "Logged in as: " + user.email;
    } else {
        // User not logged in → send to login
        window.location.href = "login.html";
    }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
});
