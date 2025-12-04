import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        window.location.href = "login.html";
    } catch (error) {
        alert("Error: " + error.message);
    }
});
