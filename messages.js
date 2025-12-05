// ========== FIREBASE SETUP ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, set } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const messagesRef = ref(db, "messages");

// DOM Elements
const form = document.getElementById("messageForm");
const messagesContainer = document.getElementById("messagesContainer");
const messageInput = document.getElementById("messageInput");

// ========== SEND MESSAGE ==========
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = messageInput.value.trim();
  if (text === "") return;

  const msgData = {
    user: "Perry User",
    text: text,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  };

  push(messagesRef, msgData);

  messageInput.value = "";
});

// ========== DISPLAY MESSAGES ==========
onChildAdded(messagesRef, (data) => {
  const msg = data.val();

  const bubble = document.createElement("div");
  bubble.classList.add("message-bubble");

  bubble.innerHTML = `
    <strong>${msg.user}</strong><br>
    ${msg.text}
    <div class="msg-time">${msg.time}</div>
  `;

  messagesContainer.appendChild(bubble);

  // Auto scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// ========== TYPING INDICATOR ==========
let typingRef = ref(db, "typing");

messageInput.addEventListener("input", () => {
  set(typingRef, "Someone is typing...");

  setTimeout(() => {
    set(typingRef, "");
  }, 1500);
});

onChildAdded(typingRef, (data) => {
  document.getElementById("typingStatus").innerText = data.val();
});
