import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Your Firebase project config
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

// Email & Password Login
document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Login successful!");
        window.location.href = "home.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Google Login
document.getElementById("googleBtn").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(() => {
        alert("Google Login successful!");
        window.location.href = "home.html";
    })
    .catch((error) => {
        alert(error.message);
    });
});
