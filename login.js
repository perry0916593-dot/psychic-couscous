const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        alert("Login successful!");
        window.location.href = "home.html"; // redirect to home page after login
    })
    .catch((error) => {
        alert(error.message);
    });
});
