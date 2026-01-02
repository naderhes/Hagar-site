// 1. إنشاء القلوب الطائرة
function createFloatingHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    if(container) container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createFloatingHeart, 200);

// 2. دالة الدخول (الباسورد)
function checkPassword() {
    const passInput = document.getElementById('password');
    const value = passInput.value.trim(); // تنظيف أي مسافات زائدة
    
    if (value === "25/4/2002") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        initSliders(); // تشغيل السلايدر عند الدخول
        window.scrollTo(0, 0);
    } else {
        alert("التاريخ غلط يا روحي.. حاولي تاني 🌚");
        passInput.value = ""; 
    }
}

// 3. تحميل الصور من المجلدات
function initSliders() {
    // الصور الرئيسية (12 صورة)
    const pSlider = document.getElementById('slider-p');
    if(pSlider.innerHTML === "") { // لضمان عدم التكرار
        for (let i = 1; i <= 12; i++) {
            const img = document.createElement('img');
            img.src = `images/${i}.jpg`;
            if (i === 1) img.classList.add('active');
            pSlider.appendChild(img);
        }
    }

    // صور الرسائل (13 صورة)
    const mSlider = document.getElementById('slider-m');
    if(mSlider.innerHTML === "") {
        for (let i = 1; i <= 13; i++) {
            const img = document.createElement('img');
            img.src = `messages/messages${i}.jpg`;
            if (i === 1) img.classList.add('active');
            mSlider.appendChild(img);
        }
    }
}

function openGallery(galleryId, iconId) {
    document.getElementById(iconId).classList.add('hidden');
    document.getElementById(galleryId).classList.remove('hidden');
}

function showGift(contentId, iconId) {
    document.getElementById(iconId).style.display = 'none';
    const content = document.getElementById(contentId);
    content.classList.remove('hidden');
}

function moveSlide(step, sliderId) {
    const images = document.querySelectorAll(`#${sliderId} img`);
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    if (activeIndex === -1) return;
    images[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + step + images.length) % images.length;
    images[newIndex].classList.add('active');
}

function playMusic() {
    const audio = document.getElementById('romantic-song');
    audio.play();
    alert("الأغنية بدأت.. اسمعيها بقلبك 💗");
}
