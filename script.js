// 1. القلوب الطائرة
function createFloatingHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '💗';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createFloatingHeart, 200);

// 2. الباسورد (تعديل لضمان العمل)
function checkPassword() {
    const input = document.getElementById('password').value.trim();
    const correctDate = "25/4/2002"; 
    
    if (input === correctDate) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        initSliders();
        window.scrollTo(0, 0);
    } else {
        alert("التاريخ غلط يا روحي، حاولي تاني 🌚");
    }
}

// 3. تعديل مسارات الصور بناءً على مجلداتك
function initSliders() {
    // الصور الشخصية (موجودة في مجلد images وأساميها 1.jpg, 2.jpg...)
    const pSlider = document.getElementById('slider-p');
    pSlider.innerHTML = ''; // تنظيف السلايدر
    for (let i = 1; i <= 12; i++) {
        const img = document.createElement('img');
        img.src = `images/${i}.jpg`; // المسار الصحيح من صورتك
        if (i === 1) img.classList.add('active');
        pSlider.appendChild(img);
    }

    // الرسائل (موجودة في مجلد messages وأساميها messages1.jpg...)
    const mSlider = document.getElementById('slider-m');
    mSlider.innerHTML = ''; 
    for (let i = 1; i <= 13; i++) {
        const img = document.createElement('img');
        img.src = `messages/messages${i}.jpg`; // المسار الصحيح من صورتك
        if (i === 1) img.classList.add('active');
        mSlider.appendChild(img);
    }
}

// 4. الهدية والأغنية
function openGallery(galleryId, iconId) {
    document.getElementById(iconId).classList.add('hidden');
    document.getElementById(galleryId).classList.remove('hidden');
}

function showGift(contentId, iconId) {
    document.getElementById(iconId).classList.add('hidden');
    const content = document.getElementById(contentId);
    content.classList.remove('hidden');
    // تعديل مسار صورة الهدية
    content.querySelector('img').src = 'images/gift.jpg';
}

function moveSlide(step, sliderId) {
    const images = document.querySelectorAll(`#${sliderId} img`);
    let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    if (activeIndex === -1) activeIndex = 0;
    images[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + step + images.length) % images.length;
    images[newIndex].classList.add('active');
}

function playMusic() {
    const audio = document.getElementById('romantic-song');
    audio.src = 'music/song.mp3'; // المسار الصحيح للأغنية
    audio.play();
    alert("الأغنية بدأت.. اسمعيها بقلبك 💗");
}
