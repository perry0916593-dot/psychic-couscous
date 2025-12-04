import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCgm3pqkOg4sATsImvq0R6ZPNG1HY9jJQU",
    authDomain: "my-social-app-c1fb8.firebaseapp.com",
    projectId: "my-social-app-c1fb8",
    storageBucket: "my-social-app-c1fb8.firebasestorage.app",
    messagingSenderId: "618305477782",
    appId: "1:618305477782:web:85bd2c41c9a717d8a876b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email + Password Signup
document.getElementById("signupBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Account created!");
        window.location.href = "login.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Google Signup
document.getElementById("googleBtn").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(() => {
        alert("Google signup complete!");
        window.location.href = "home.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});
