import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } 
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const messagesList = document.getElementById("messages-list");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

// SEND MESSAGE
sendBtn.addEventListener("click", async () => {
    const text = messageInput.value.trim();
    if (text === "") return;

    await addDoc(collection(db, "messages"), {
        text: text,
        time: serverTimestamp()
    });

    messageInput.value = "";
});

// LISTEN FOR NEW MESSAGES
const q = query(collection(db, "messages"), orderBy("time", "asc"));

onSnapshot(q, (snapshot) => {
    messagesList.innerHTML = "";
    snapshot.forEach((doc) => {
        const msg = doc.data();

        const bubble = document.createElement("div");
        bubble.classList.add("message-bubble");
        bubble.textContent = msg.text;

        messagesList.appendChild(bubble);
    });

    // auto-scroll to bottom
    messagesList.scrollTop = messagesList.scrollHeight;
});
