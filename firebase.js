// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase Config (COPY YOUR OWN FROM FIREBASE)
const firebaseConfig = {
  apiKey: "AIzaSyCg3mpqkOg4sATsXXXXXXXXXX",
  authDomain: "my-social-app-c1fbd.firebaseapp.com",
  projectId: "my-social-app-c1fbd",
  storageBucket: "my-social-app-c1fbd.appspot.com",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:XXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export
export const auth = getAuth(app);
export const db = getFirestore(app);
