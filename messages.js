import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getUserLocation } from "./location.js";

// Select elements
const messageInput = document.getElementById("messageBox");
const sendBtn = document.getElementById("sendBtn");
const messageList = document.getElementById("messageList");

// Firestore collection
const messagesRef = collection(db, "messages");

// SEND MESSAGE
sendBtn.addEventListener("click", async () => {
    const text = messageInput.value.trim();
    if (text === "") return;

    // Get user location
    let locationData = await getUserLocation();

    // Save message to Firestore
    await addDoc(messagesRef, {
        text: text,
        createdAt: serverTimestamp(),
        location: locationData
    });

    messageInput.value = "";
});

// LOAD MESSAGES LIVE
const q = query(messagesRef, orderBy("createdAt", "asc"));
onSnapshot(q, (snapshot) => {
    messageList.innerHTML = "";
    snapshot.forEach((doc) => {
        let data = doc.data();

        let li = document.createElement("li");
        li.className = "message-item";

        li.innerHTML = `
            <p>${data.text}</p>
            <span class="location-tag">
                🌍 ${data.location.city}, ${data.location.country}
            </span>
        `;

        messageList.appendChild(li);
    });
});
