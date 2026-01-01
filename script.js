/* الباسورد يقبل كذا صيغة */
const passwords = [
  "25/4/2002",
  "25-4-2002",
  "25.4.2002",
  "25/04/2002",
];

function checkPassword() {
  const input = document.getElementById("password").value.trim();

  if (passwords.includes(input)) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText =
      "❌ التاريخ مش صح يا قلبي";
  }
}

/* سلايدر الصور */
let index = 0;
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
];

function showImage() {
  document.getElementById("mainImage").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

/* فتح الهدية */
function openGift() {
  document.getElementById("giftImage").classList.remove("hidden");
}
