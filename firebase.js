import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8m3pqkOg4sATsI...",
  authDomain: "my-social-app-c1fbf.firebaseapp.com",
  projectId: "my-social-app-c1fbf",
  storageBucket: "my-social-app-c1fbf.appspot.com",
  messagingSenderId: "618305477782",
  appId: "1:618305477782:web:94e..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);
