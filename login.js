import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC8m3pqkOg4sATsIxxxxxx",
    authDomain: "my-social-app-c1fb8.firebaseapp.com",
    projectId: "my-social-app-c1fb8",
    storageBucket: "my-social-app-c1fb8.appspot.com",
    messagingSenderId: "618305477782",
    appId: "1:618305477782:web:94e044ea01d578e8a876b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "home.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});
