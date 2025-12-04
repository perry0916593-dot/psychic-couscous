// SIGNUP FORM SCRIPT
const signupForm = document.getElementById("signupForm");
const signupBtn = document.getElementById("signupBtn");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Basic validation
    if (!fullname || !email || !password || !confirmPassword) {
        alert("Please fill all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // If everything is okay
    alert("Signup successful! Redirecting to login page...");
    window.location.href = "login.html";
});
