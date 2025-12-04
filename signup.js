import { auth, db, createUserWithEmailAndPassword, signInWithPopup, googleProvider, doc, setDoc } from "./firebase.js";

// Email/Password Sign Up
document.getElementById("signupBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user info to Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            createdAt: new Date()
        });

        alert("Account created successfully!");
        window.location.href = "home.html"; // redirect after signup

    } catch (error) {
        alert(error.message);
    }
});

// Google Sign Up
document.getElementById("googleBtn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Save Google user info
        await setDoc(doc(db, "users", user.uid), {
            name: user.displayName,
            email: user.email,
            createdAt: new Date()
        });

        window.location.href = "home.html";

    } catch (error) {
        alert(error.message);
    }
});
