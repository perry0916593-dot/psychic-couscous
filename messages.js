import { 
    collection, 
    addDoc, 
    onSnapshot, 
    serverTimestamp, 
    query, 
    orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = window.db;

const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messagesList = document.getElementById("messagesList");

// SEND MESSAGE
sendBtn.addEventListener("click", async () => {
    const text = messageInput.value.trim();
    if (text === "") return;

    await addDoc(collection(db, "messages"), {
        text: text,
        createdAt: serverTimestamp()
    });

    messageInput.value = "";
});

// DISPLAY MESSAGES LIVE
const q = query(collection(db, "messages"), orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
    messagesList.innerHTML = "";
    snapshot.forEach((doc) => {
        let message = doc.data();
        let div = document.createElement("div");
        div.className = "message-box";
        div.textContent = message.text;
        messagesList.appendChild(div);
    });
});
