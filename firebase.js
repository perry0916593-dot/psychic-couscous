import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR KEY",
  authDomain: "YOUR DOMAIN",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR BUCKET",
  messagingSenderId: "YOUR ID",
  appId: "YOUR APP ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
