// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8m3pqkOg4sATsIM8gkWd-eJC0Z1xRGx0",
  authDomain: "my-social-app-c1fb8.firebaseapp.com",
  projectId: "my-social-app-c1fb8",
  storageBucket: "my-social-app-c1fb8.appspot.com",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:94ebd181901034e8cfb775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
