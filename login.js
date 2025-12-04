import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7IfFz1-VdHYVEBzNv3toWV2Js8oPMS1Q",
    authDomain: "c1fb8.firebaseapp.com",
    projectId: "c1fb8",
    storageBucket: "c1fb8.appspot.com",
    messagingSenderId: "324868107508",
    appId: "1:324868107508:web:3c2ebe37c700bd9a4b4e44"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            window.location.href = "home.html"; // you can change this to dashboard.html later
        })
        .catch(error => {
            alert(error.message);
        });
});
