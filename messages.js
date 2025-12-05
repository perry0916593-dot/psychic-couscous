// Simple local message system

let messages = JSON.parse(localStorage.getItem("messages")) || [];

function saveMessages() {
    localStorage.setItem("messages", JSON.stringify(messages));
}

function sendMessage(text) {
    if (text.trim() === "") return;

    messages.push({
        id: Date.now(),
        text: text
    });

    saveMessages();
    loadMessages();
}

function loadMessages() {
    const list = document.querySelector(".message-list");
    if (!list) return;

    list.innerHTML = "";

    messages.forEach(m => {
        const li = document.createElement("li");
        li.textContent = m.text;
        list.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", loadMessages);
