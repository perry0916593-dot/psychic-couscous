import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("userEmail").textContent = "Logged in as: " + user.email;
    } else {
        // User is not logged in → send them to login page
        window.location.href = "login.html";
    }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            window.location.href = "login.html";
        })
        .catch(error => {
            alert(error.message);
        });
});
