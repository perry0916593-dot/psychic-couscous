// ---------------------
// Firebase Setup
// ---------------------
import { auth, db } from "./firebaseConfig.js";

import {
    signInWithEmailAndPassword
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

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch user data from Firestore
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();

            // Save data in localStorage for access on home page
            localStorage.setItem("username", data.username);
            localStorage.setItem("location", data.location);
            localStorage.setItem("email", data.email);

            // Go to home page
            window.location.href = "home.html";

        } else {
            alert("User data not found in Firestore!");
        }

    } catch (error) {
        alert(error.message);
        console.log(error);
    }
});
