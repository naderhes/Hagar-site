let imgIndex = 1;
let msgIndex = 1;

function checkPassword() {
  const val = document.getElementById("password").value.trim();
  const allowed = ["25/4/2002","25-4-2002","25.4.2002"];

  if (allowed.includes(val)) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "❌ التاريخ غلط";
  }
}

function toggle(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function nextImage() {
  imgIndex++;
  if (imgIndex > 12) imgIndex = 1;
  document.getElementById("photo").src = `images/${imgIndex}.jpg`;
}

function prevImage() {
  imgIndex--;
  if (imgIndex < 1) imgIndex = 12;
  document.getElementById("photo").src = `images/${imgIndex}.jpg`;
}

function nextMsg() {
  msgIndex++;
  if (msgIndex > 13) msgIndex = 1;
  document.getElementById("msg").src = `messages/${msgIndex}.jpg`;
}

function prevMsg() {
  msgIndex--;
  if (msgIndex < 1) msgIndex = 13;
  document.getElementById("msg").src = `messages/${msgIndex}.jpg`;
}

function playMusic() {
  document.getElementById("music").play();
}