import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSxZpKohNzA6YvKoGIGBn6V2mbxCb6jJs",
  authDomain: "mywebsite-36f07.firebaseapp.com",
  projectId: "mywebsite-36f07",
  storageBucket: "mywebsite-36f07.firebasestorage.app",
  messagingSenderId: "495609232488",
  appId: "1:495609232488:web:684ca2efa675d2c28ae9dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            window.location.href = "home.html";  
        })
        .catch((error) => {
            alert(error.message);
        });
});
