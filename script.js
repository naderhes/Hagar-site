// 1. توليد القلوب الطائرة
function createFloatingHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createFloatingHeart, 200);

// 2. التحقق من الباسورد
function checkPassword() {
    const input = document.getElementById('password').value;
    if (input === "25/4/2002") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        initSliders();
    } else {
        alert("التاريخ غلط يا قلبي.. حاولي تاني 🌚");
    }
}

// 3. تجهيز السلايدرز (الصور والرسائل)
function initSliders() {
    const pSlider = document.getElementById('slider-p');
    for (let i = 1; i <= 12; i++) {
        const img = document.createElement('img');
        img.src = `p${i}.jpg`;
        if (i === 1) img.classList.add('active');
        pSlider.appendChild(img);
    }

    const mSlider = document.getElementById('slider-m');
    for (let i = 1; i <= 13; i++) {
        const img = document.createElement('img');
        img.src = `m${i}.jpg`;
        if (i === 1) img.classList.add('active');
        mSlider.appendChild(img);
    }
}

// 4. وظائف الفتح والتقليب
function openGallery(galleryId, iconId) {
    document.getElementById(iconId).classList.add('hidden');
    document.getElementById(galleryId).classList.remove('hidden');
}

function showGift(contentId, iconId) {
    document.getElementById(iconId).classList.add('hidden');
    document.getElementById(contentId).classList.remove('hidden');
}

function moveSlide(step, sliderId) {
    const images = document.querySelectorAll(`#${sliderId} img`);
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + step + images.length) % images.length;
    images[newIndex].classList.add('active');
}

function playMusic() {
    const audio = document.getElementById('romantic-song');
    audio.play();
    alert("الأغنية بدأت.. اسمعيها بقلبك 💗");
}
