// ===============================
//  FIREBASE: LOAD MESSAGES
// ===============================
import { db } from "./firebase.js";
import { 
    collection, 
    addDoc, 
    onSnapshot, 
    serverTimestamp, 
    query, 
    orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Reference to the "messages" collection
const messagesRef = collection(db, "messages");

// Select HTML elements
const messagesList = document.getElementById("messagesList");
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");

// ===============================
//  SEND MESSAGE
// ===============================
sendMessageBtn.addEventListener("click", async () => {
    const text = messageInput.value.trim();
    if (text === "") return;

    await addDoc(messagesRef, {
        text: text,
        timestamp: serverTimestamp()
    });

    messageInput.value = "";
});

// ===============================
//  LIVE MESSAGE LISTENER
// ===============================
const q = query(messagesRef, orderBy("timestamp", "asc
