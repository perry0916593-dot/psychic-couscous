// Import Firebase functions from the CDN version (works for normal HTML files)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Firebase configuration (from your screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyCg m3pqk0g4sATsY...",
  authDomain: "my-social-app-c1fb8.firebaseapp.com",
  projectId: "my-social-app-c1fb8",
  storageBucket: "my-social-app-c1fb8.appspot.com",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:94e044..."
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
