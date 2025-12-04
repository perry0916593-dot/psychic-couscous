// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg3mpqkOg4sATsIXXXXXXXX",
  authDomain: "my-social-app-c1fb8.firebaseapp.com",
  projectId: "my-social-app-c1fb8",
  storageBucket: "my-social-app-c1fb8.appspot.com",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:85bd2c41c9a717d8a876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "home.html"; 
    })
    .catch((error) => {
      alert(error.message);
    });
});
