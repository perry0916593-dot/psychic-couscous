import { db, auth } from "./firebase.js";
import { 
    collection, addDoc, serverTimestamp, query, orderBy, onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const messagesList = document.getElementById("messagesList");
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");

sendMessageBtn.addEventListener("click", async () => {
    const text = messageInput.value.trim();
    const user = auth.currentUser;

    if (!text || !user) return;

    await addDoc(collection(db, "messages"), {
        text: text,
        userId: user.uid,
        timestamp: serverTimestamp()
    });

    messageInput.value = "";
});

// Load messages live
const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

onSnapshot(q, (snapshot) => {
    messagesList.innerHTML = "";

    snapshot.forEach((doc) => {
        const msg = doc.data();
        const div = document.createElement("div");
        div.classList.add("message-bubble");
        div.innerHTML = `<p>${msg.text}</p>`;
        messagesList.appendChild(div);
    });
});
