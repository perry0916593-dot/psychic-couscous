// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC8m3pqkOg4sATsImvq0R6ZPl...",
  authDomain: "my-social-app-c1fb8.firebaseapp.com",
  projectId: "my-social-app-c1fb8",
  storageBucket: "my-social-app-c1fb8.firebasestorage.app",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:209328ea31xxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup button listener
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful!");
      window.location.href = "home.html"; 
    })
    .catch((error) => {
      alert(error.message);
    });
});
