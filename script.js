/********************
 * الباسورد
 ********************/
const correctPassword = "25/4/2002";

function checkPassword() {
  const input = document.getElementById("password").value.trim();

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "❌ الباسورد غلط يا قلبي";
  }
}

/********************
 * معرض الصور (12 صورة)
 ********************/
let imgIndex = 1;
const totalImages = 12;

function showGallery() {
  document.getElementById("gallery").classList.remove("hidden");
}

function nextImage() {
  imgIndex++;
  if (imgIndex > totalImages) imgIndex = 1;
  document.getElementById("sliderImage").src = `images/${imgIndex}.jpg`;
}

function prevImage() {
  imgIndex--;
  if (imgIndex < 1) imgIndex = totalImages;
  document.getElementById("sliderImage").src = `images/${imgIndex}.jpg`;
}

/********************
 * صور الرسائل (13 صورة)
 ********************/
let msgIndex = 1;
const totalMessages = 13;

function showMessages() {
  document.getElementById("messages").classList.remove("hidden");
}

function nextMsg() {
  msgIndex++;
  if (msgIndex > totalMessages) msgIndex = 1;
  document.getElementById("msgImage").src = `messages/m${msgIndex}.jpg`;
}

function prevMsg() {
  msgIndex--;
  if (msgIndex < 1) msgIndex = totalMessages;
  document.getElementById("msgImage").src = `messages/m${msgIndex}.jpg`;
}

/********************
 * الهدايا
 ********************/
function showGift1() {
  document.getElementById("gift1").classList.remove("hidden");
}

function playMusic() {
  const music = document.getElementById("music");
  music.play();
}