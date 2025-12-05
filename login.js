// ---------------------
// Firebase Setup
// ---------------------
import { auth, db } from "./firebaseConfig.js";

import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    getDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ---------------------
// Login Form
// ---------------------
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user's Firestore data
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
            const data = userDoc.data();

            // Save user data to localStorage for later use
            localStorage.setItem("username", data.username);
            localStorage.setItem("location", data.location);
            localStorage.setItem("email", data.email);
        }

        // Redirect to home
        window.location.href = "home.html";

    } catch (error) {
        alert(error.message);
        console.log(error);
    }
});
