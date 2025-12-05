import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { auth } from "./firebase.js";

const db = getFirestore();

// Elements from the HTML
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messagesContainer = document.getElementById("messagesContainer");

// Listen for new messages in realtime
function loadMessages() {
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    onSnapshot(q, (snapshot) => {
        messagesContainer.innerHTML = ""; // Clear first

        snapshot.forEach((doc) => {
            const data = doc.data();
            const messageDiv = document.createElement("div");

            messageDiv.className = "message-box";
            messageDiv.innerHTML = `
                <p class="message-user">${data.user}</p>
                <p class="message-text">${data.text}</p>
            `;

            messagesContainer.appendChild(messageDiv);
        });

        // Auto scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
}

// Send a new message
messageForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = messageInput.value.trim();
    const user = auth.currentUser?.email || "Anonymous";

    if (!text) return;

    try {
        await addDoc(collection(db, "messages"), {
            text: text,
            user: user,
            timestamp: serverTimestamp()
        });

        messageInput.value = "";
    } catch (err) {
        console.error("Error sending message:", err);
    }
});

// Load chat immediately
loadMessages();
