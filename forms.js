
assets/js/forms.js

document.getElementById("registrationForm").addEventListener("submit", function(e){
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    alert("تم استلام طلبك بنجاح! (محاكاة Front-end)");
    window.location.href = "success.html"; // الانتقال إلى صفحة النجاح
});


---
