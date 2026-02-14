// script.js

let currentMessageIndex = 0;

function toggleMessages() {
    const messages = document.querySelectorAll(".message");
    messages.forEach((msg, index) => {
        msg.classList.add("hidden"); // Hide all messages
        if (index === currentMessageIndex) {
            msg.classList.remove("hidden"); // Show current message
        }
    });

    // Cycle through messages
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
