import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

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
const db = getFirestore(app);
const storage = getStorage(app);

// Check logged-in user
onAuthStateChanged(auth, async (user) => {
    if (user) {
        document.getElementById("userEmail").textContent = "Logged in as: " + user.email;

        // Load existing profile
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById("username").value = data.username || "";
            document.getElementById("bio").value = data.bio || "";
        }
    } else {
        window.location.href = "login.html";
    }
});

// Save profile
document.getElementById("saveBtn").onclick = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const username = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;
    const file = document.getElementById("profilePic").files[0];

    let photoURL = null;

    if (file) {
        const storageRef = ref(storage, "profiles/" + user.uid + ".jpg");
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
    }

    await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username: username,
        bio: bio,
        photoURL: photoURL || null
    });

    alert("Profile saved!");
};

// Logout
document.getElementById("logoutBtn").onclick = () => {
    signOut(auth);
    window.location.href = "login.html";
};
