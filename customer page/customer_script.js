const chatPopup = document.getElementById("chatPopup");
const chatLog = document.getElementById("chatLog");
const chatInput = document.getElementById("chatInput");

function toggleChatbot() {
  const isVisible = chatPopup.style.display === "flex";
  chatPopup.style.display = isVisible ? "none" : "flex";

  if (!isVisible && chatLog.children.length === 0) {
    appendMessage("Hi, I am Sudha, how can I help you..?", "bot");
  }
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  appendMessage(text, "user");
  chatInput.value = "";

  setTimeout(() => {
    const reply = getBotResponse(text);
    appendMessage(reply, "bot");
  }, 500);
}

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender === "user" ? "user-message" : "bot-message");
  msg.textContent = text;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hi") || input.includes("hello")) {
    return "Hey there! Sudha here. How can I help you today?";
  } else if (input.includes("vintage")) {
    return "Vintage is a real estate contact intelligence platform powered by AI.";
  } else if (input.includes("price") || input.includes("cost")) {
    return "Prices vary depending on your needs, What are you looking for?";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a great day from Sudha!";
  } else if (input.includes("thanks") || input.includes("thank you")) {
    return "You are welcome! Sudha is happy to help!";
  } else {
    return "Sorry, I did not understand that. Can you try asking in a different way?";
  }
}

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
