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

// HTML Elements
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");
const messagesContainer = document.getElementById("messagesContainer");

// ======================================================
// LOAD MESSAGES IN REALTIME
// ======================================================
function loadMessages() {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("timestamp", "asc"));

  onSnapshot(q, (snapshot) => {
    messagesContainer.innerHTML = ""; // Clear chat

    snapshot.forEach((doc) => {
      const data = doc.data();
      const messageDiv = document.createElement("div");

      // Add message bubble style
      messageDiv.className = data.uid === auth.currentUser?.uid
        ? "message-box sent"
        : "message-box received";

      // Timestamp formatting
      let timeString = "";
      if (data.timestamp?.toDate) {
        const date = data.timestamp.toDate();
        timeString = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
      }

      messageDiv.innerHTML = `
        <p class="message-text">${data.text}</p>
        <span class="timestamp">${timeString}</span>
      `;

      messagesContainer.appendChild(messageDiv);
    });

    // Auto scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  });
}

loadMessages();

// ======================================================
// SEND MESSAGE
// ======================================================
messageForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  try {
    await addDoc(collection(db, "messages"), {
      text: text,
      uid: auth.currentUser?.uid || "anonymous",
      timestamp: serverTimestamp()
    });

    messageInput.value = "";
  } catch (error) {
    console.error("Error sending message:", error);
  }
});

// ======================================================
// TYPING INDICATOR (Frontend only)
// ======================================================
let typingTimeout;

messageInput.addEventListener("input", () => {
  showTyping();

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    hideTyping();
  }, 1000);
});

function showTyping() {
  let typingDiv = document.getElementById("typingIndicator");

  if (!typingDiv) {
    typingDiv = document.createElement("div");
    typingDiv.id = "typingIndicator";
    typingDiv.className = "typing";
    typingDiv.innerText = "Someone is typing...";
    messagesContainer.appendChild(typingDiv);
  }
}

function hideTyping() {
  const typingDiv = document.getElementById("typingIndicator");
  if (typingDiv) typingDiv.remove();
}
