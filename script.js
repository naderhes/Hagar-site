const passwords = [
  "25/4/2002",
  "25-4-2002",
  "25.4.2002",
  "2542002"
];

function checkPassword() {
  const val = document.getElementById("password").value.trim();
  if (passwords.includes(val)) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    hearts();
  } else {
    document.getElementById("error").innerText = "❌ جربي تاني يا قلبي";
  }
}

/* صورها */
let imgIndex = 1;
function toggleImages() {
  document.getElementById("imagesBox").classList.toggle("hidden");
  document.getElementById("mainImage").src = `images/${imgIndex}.jpg`;
}
function nextImage() {
  imgIndex = imgIndex % 12 + 1;
  document.getElementById("mainImage").src = `images/${imgIndex}.jpg`;
}
function prevImage() {
  imgIndex = imgIndex === 1 ? 12 : imgIndex - 1;
  document.getElementById("mainImage").src = `images/${imgIndex}.jpg`;
}

/* الرسائل */
let msgIndex = 1;
function toggleMessages() {
  document.getElementById("messagesBox").classList.toggle("hidden");
  document.getElementById("msgImage").src = `messages/${msgIndex}.jpg`;
}
function nextMsg() {
  msgIndex = msgIndex % 13 + 1;
  document.getElementById("msgImage").src = `messages/${msgIndex}.jpg`;
}
function prevMsg() {
  msgIndex = msgIndex === 1 ? 13 : msgIndex - 1;
  document.getElementById("msgImage").src = `messages/${msgIndex}.jpg`;
}

/* الهدية */
function toggleGift() {
  const g = document.getElementById("giftImg");
  g.src = "gift/gift.jpg";
  g.classList.toggle("hidden");
}

/* الموسيقى */
function toggleMusic() {
  const m = document.getElementById("music");
  m.classList.toggle("hidden");
  m.play();
}

/* القلوب */
function hearts() {
  setInterval(() => {
    const h = document.createElement("span");
    h.innerText = "💗";
    h.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts").appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 300);
}
