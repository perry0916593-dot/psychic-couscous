// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg m3pqkOg4sATsI...", 
  authDomain: "my-social-app-c1fb....firebaseapp.com",
  projectId: "my-social-app-c1fb...",
  storageBucket: "my-social-app-c1fb....appspot.com",
  messagingSenderId: "61830547782",
  appId: "1:61830547782:web:94e..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Signup
document.getElementById("signupBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        document.getElementById("message").innerText = "Account created successfully!";
    })
    .catch((error) => {
        document.getElementById("message").innerText = error.message;
    });
});
