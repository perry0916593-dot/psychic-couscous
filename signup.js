// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgm3pqkOg4sATsImvq0R6ZPHN2ob5W4HQ",
  authDomain: "my-social-app-c1fb8.firebaseapp.com",
  projectId: "my-social-app-c1fb8",
  storageBucket: "my-social-app-c1fb8.firebasestorage.app",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:209328eae31c0c50dc162a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Button
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.innerHTML = "Signup Successful!";
      message.style.color = "green";
      window.location.href = "login.html"; 
    })
    .catch((error) => {
      message.innerHTML = error.message;
      message.style.color = "red";
    });
});
