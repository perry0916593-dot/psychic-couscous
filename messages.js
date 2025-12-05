// =========================
//  SHOW USER'S LOCATION NAME
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const locationName = localStorage.getItem("locationName") || "World";
    document.getElementById("locationDisplay").textContent = locationName;
});


// =========================
//  SEND A MESSAGE
// =========================
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const messagesList = document.getElementById("messages-list");

messageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = messageInput.value.trim();
    if (text === "") return;

    // Create message bubble
    const bubble = document.createElement("div");
    bubble.classList.add("message-bubble");
    bubble.textContent = text;

    // Add to the list
    messagesList.appendChild(bubble);

    // Auto scroll down
    messagesList.scrollTop = messagesList.scrollHeight;

    // Clear input box
    messageInput.value = "";
});
