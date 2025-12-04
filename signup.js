const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        alert("Account created successfully!");
        window.location.href = "login.html"; // Redirect to login
    })
    .catch((error) => {
        alert(error.message);
    });
});
