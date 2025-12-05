import { 
    getDatabase, ref, push, onValue 
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

import { app } from "./firebase.js";

const db = getDatabase(app);
const messagesRef = ref(db, "messages");

// Elements
const sendBtn = document.getElementById("sendBtn");
const messageText = document.getElementById("messageText");
const messagesList = document.getElementById("messagesList");

// Send message
sendBtn.addEventListener("click", () => {
    const text = messageText.value.trim();
    if (text === "") return;

    push(messagesRef, {
        text: text,
        time: Date.now()
    });

    messageText.value = "";
});

// Load messages in real time
onValue(messagesRef, (snapshot) => {
    messagesList.innerHTML = "";
    snapshot.forEach((msg) => {
        const data = msg.val();

        const bubble = document.createElement("div");
        bubble.classList.add("message-bubble");
        bubble.innerText = data.text;

        messagesList.appendChild(bubble);
    });
});
