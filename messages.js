import { db, auth } from "./firebase.js";
import { 
    collection, addDoc, serverTimestamp, query, orderBy, onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// DOM elements
const sendBtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");
const messagesList = document.getElementById("messages-list");

// Auto load messages in real-time
function loadMessages() {
    const q = query(
        collection(db, "messages"),
        orderBy("timestamp", "asc")
    );

    onSnapshot(q, (snapshot) => {
        messagesList.innerHTML = "";

        snapshot.forEach((doc) => {
            const msg = doc.data();
            const bubble = document.createElement("div");
            bubble.classList.add("message-bubble");

            // Show sender or anonymous
            bubble.innerHTML = `
                <strong>${msg.email || "User"}:</strong><br>
                ${msg.text}
            `;

            messagesList.appendChild(bubble);
        });

        // Auto scroll down
        messagesList.scrollTop = messagesList.scrollHeight;
    });
}

// Send message
async function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return;

    const user = auth.currentUser;

    await addDoc(collection(db, "messages"), {
        text: text,
        email: user ? user.email : "Anonymous",
        timestamp: serverTimestamp()
    });

    messageInput.value = "";
}

// CLICK send
sendBtn.addEventListener("click", sendMessage);

// ENTER key sends message
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Load messages on page start
loadMessages();
