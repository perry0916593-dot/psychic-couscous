import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "home.html"; // Redirect to your home page
  } catch (error) {
    alert("Error: " + error.message);
  }
});
