// تفعيل القائمة الجانبية
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل الروابط في القائمة الجانبية
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة النشاط من جميع الروابط
            navLinks.forEach(l => l.classList.remove('active'));
            
            // إضافة النشاط للرابط المختار
            this.classList.add('active');
            
            // هنا يمكنك إضافة كود لتغيير المحتوى حسب الرابط
            console.log('تم النقر على:', this.querySelector('span:last-child').textContent);
        });
    });

    // زر القائمة للموبايل
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // تأثيرات للبطاقات عند التمرير
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // تطبيق التأثيرات على البطاقات
    const statCards = document.querySelectorAll('.stat-card');
    const contentCards = document.querySelectorAll('.content-card');
    
    [...statCards, ...contentCards].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // محاكاة تحديث الإحصائيات
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString();
            }
        }, 16);
    }

    // تشغيل العدادات عند ظهورها
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('h3');
                const targetValue = parseInt(statNumber.textContent.replace(/,/g, ''));
                animateCounter(statNumber, targetValue);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // مراقبة بطاقات الإحصائيات
    statCards.forEach(card => {
        statObserver.observe(card);
    });

    // إضافة تأثيرات hover متقدمة
    const cards = document.querySelectorAll('.stat-card, .content-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    console.log('تم تحميل نظام لوحة التحكم بنجاح! 🚀');
});
