// التأكد من الباسورد (تاريخ الميلاد)
function checkPassword() {
    const pass = document.getElementById('password').value.trim();
    
    // التاريخ اللي حددته: 25/4/2002
    const birthday = "25/4/2002"; 
    
    if(pass === birthday) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        // لإعادة الصفحة للأعلى عند الفتح
        window.scrollTo(0, 0);
        
        // تشغيل تأثير قلوب إضافي عند الدخول الناجح
        for(let i=0; i<20; i++) {
            setTimeout(createHeart, i * 100);
        }
    } else {
        alert("التاريخ غلط يا روحي، حاولي تاني 🌚 (اكتبيه كده: 25/4/2002)");
    }
}
