// ===== الرسائل =====
let messageIndex = 1;
const totalMessages = 13;

function toggleMessages() {
  document.getElementById("messagesBox").classList.toggle("hidden");
}

function nextMessage() {
  messageIndex++;
  if (messageIndex > totalMessages) messageIndex = 1;
  document.getElementById("messageImg").src = `messages/${messageIndex}.jpg`;
}

function prevMessage() {
  messageIndex--;
  if (messageIndex < 1) messageIndex = totalMessages;
  document.getElementById("messageImg").src = `messages/${messageIndex}.jpg`;
}

// ===== الهدية الأولى =====
function toggleGift() {
  document.getElementById("giftBox").classList.toggle("hidden");
}

// ===== الموسيقى =====
function toggleMusic() {
  document.getElementById("musicBox").classList.toggle("hidden");
}
