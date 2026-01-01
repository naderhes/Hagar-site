/* ===== باسورد ===== */
function checkPassword() {
  const v = document.getElementById("password").value.trim();
  const passwords = ["25/4/2002", "25-4-2002", "25.4.2002"];

  if (passwords.includes(v)) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "❌ التاريخ غلط";
  }
}

/* ===== صورها ===== */
let imgIndex = 1;
function toggleImages() {
  document.getElementById("imagesBox").classList.toggle("hidden");
}
function nextImage() {
  imgIndex = imgIndex < 12 ? imgIndex + 1 : 1;
  document.getElementById("mainImage").src = `images/${imgIndex}.jpg`;
}
function prevImage() {
  imgIndex = imgIndex > 1 ? imgIndex - 1 : 12;
  document.getElementById("mainImage").src = `images/${imgIndex}.jpg`;
}

/* ===== رسائل ===== */
let msgIndex = 1;
function toggleMessages() {
  document.getElementById("messagesBox").classList.toggle("hidden");
}
function nextMsg() {
  msgIndex = msgIndex < 13 ? msgIndex + 1 : 1;
  document.getElementById("msgImage").src = `messages/${msgIndex}.jpg`;
}
function prevMsg() {
  msgIndex = msgIndex > 1 ? msgIndex - 1 : 13;
  document.getElementById("msgImage").src = `messages/${msgIndex}.jpg`;
}

/* ===== هدية ===== */
function toggleGift() {
  document.getElementById("giftImg").classList.toggle("hidden");
}

/* ===== موسيقى ===== */
function playMusic() {
  const m = document.getElementById("music");
  m.currentTime = 0;
  m.play();
}

/* ===== قلوب كتير ===== */
setInterval(() => {
  const h = document.createElement("span");
  h.innerHTML = "💗";
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 300);
