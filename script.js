// 1. وظيفة إنشاء القلوب المتحركة في الخلفية
function createHeart() {
    const heartContainer = document.getElementById('hearts-container');
    if (!heartContainer) return;

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // يمكنك تغيير الشكل هنا
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // سرعة عشوائية
    heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // أحجام مختلفة
    
    heartContainer.appendChild(heart);

    // إزالة القلب بعد انتهاء الأنيميشن عشان المتصفح ميهنجش
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// تشغيل القلوب تلقائياً كل 300 مللي ثانية
setInterval(createHeart, 300);

// 2. وظيفة التحقق من كلمة السر (تاريخ الميلاد)
function checkPassword() {
    const passInput = document.getElementById('password');
    const passValue = passInput.value.trim();
    
    // التاريخ اللي أنت حددته بالظبط
    const correctBirthday = "25/4/2002"; 
    
    if (passValue === correctBirthday) {
        // إخفاء شاشة الدخول وإظهار المحتوى
        document.getElementById('login-screen').style.display = 'none';
        const mainContent = document.getElementById('main-content');
        mainContent.classList.remove('hidden');
        
        // العودة لأول الصفحة
        window.scrollTo(0, 0);
        
        // تأثير احتفالي: إنشاء مجموعة قلوب كتير فجأة
        for(let i=0; i<30; i++) {
            setTimeout(createHeart, i * 50);
        }
    } else {
        // رسالة تنبيه في حالة الخطأ
        alert("التاريخ غلط يا روحي، حاولي تاني 🌚 (اكتبي التاريخ كدة: 25/4/2002)");
    }
}

// 3. وظيفة التحكم في سلايدر الصور (التقليب يمين وشمال)
function moveSlide(n, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.getElementsByClassName('slide');
    let activeIndex = 0;

    // البحث عن الصورة الظاهرة حالياً
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            activeIndex = i;
            slides[i].classList.remove('active');
            break;
        }
    }

    // حساب مكان الصورة الجديدة
    let newIndex = activeIndex + n;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;

    // إظهار الصورة الجديدة
    slides[newIndex].classList.add('active');
}

// 4. وظيفة إظهار صناديق الهدايا والرسائل
function toggleGift(id) {
    const element = document.getElementById(id);
    
    // تبديل الظهور
    if (element.classList.contains('hidden-content')) {
        element.classList.remove('hidden-content');
        element.style.display = 'block';
        // سكرول بسيط للهدية اللي فتحت
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        element.classList.add('hidden-content');
        element.style.display = 'none';
    }
}

// 5. وظيفة تشغيل الأغنية
function playMusic() {
    const song = document.getElementById('romantic-song');
    
    if (song.paused) {
        song.play();
        alert("بدأت الأغنية.. اسمعيها بقلبك 💗");
    } else {
        song.pause();
    }
}
