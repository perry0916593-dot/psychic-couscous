// ---------------------
// Firebase Setup
// ---------------------
import { auth, db } from "./firebaseConfig.js";
import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    setDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ---------------------
// Signup Form
// ---------------------
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const username = document.getElementById("username").value.trim();
    const locationText = document.getElementById("locationInput").value.trim();

    if (locationText === "") {
        alert("Please click 'Get My Location' first.");
        return;
    }

    try {
        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user info in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: email,
            username: username,
            location: locationText,   // Saving the location here
            createdAt: new Date().toISOString()
        });

        alert("Signup successful!");
        window.location.href = "home.html";

    } catch (error) {
        alert(error.message);
        console.log(error);
    }
});
