// إنشاء القلوب
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// التأكد من الباسورد
function checkPassword() {
    const pass = document.getElementById('password').value;
    const birthday = "2000"; // غيري ده لتاريخ ميلادها الحقيقي
    
    if(pass === birthday) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        window.scrollTo(0, 0);
    } else {
        alert("التاريخ غلط يا روحي، حاولي تاني 🌚");
    }
}

// تبديل السلايدر
function moveSlide(n, sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    let activeIndex = 0;
    slides.forEach((s, i) => { if(s.classList.contains('active')) activeIndex = i; });
    
    slides[activeIndex].classList.remove('active');
    let newIndex = (activeIndex + n + slides.length) % slides.length;
    slides[newIndex].classList.add('active');
}

// إظهار الهدايا
function toggleGift(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden-content');
    if(!element.classList.contains('hidden-content')) {
        element.style.display = 'block';
    }
}

// تشغيل الأغنية
function playMusic() {
    const song = document.getElementById('romantic-song');
    song.play();
    alert("الأغنية بدأت.. اسمعي بقلبك 💗");
}
