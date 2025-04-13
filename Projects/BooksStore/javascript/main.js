document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('animation').classList.add('show');
    setTimeout(() => {
        document.getElementById('animation').classList.remove('show');
        document.getElementById('animation').classList.remove('hidden');
    }, 1000); // 1000 milliseconds = 1 second
});

const burger = document.querySelector('.icon');
const navLinks = document.querySelector('.mobile-menu .mobile-ul');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // burger.classList.toggle('toggle');
});

const close = document.querySelector('.close')

close.addEventListener("click", () => {
    navLinks.classList.toggle('active');
})




function addClassesSequentially(element, class1, class2, class3) {
    // إضافة class1 بعد ثانية
    setTimeout(() => {
        element.classList.add(class1);

        // إضافة class2 بعد نصف ثانية من إضافة class1
        setTimeout(() => {
            element.classList.add(class2);

            // إضافة class3 بعد نصف ثانية من إضافة class2
            setTimeout(() => {
                element.classList.add(class3);

                // إضافة class4 بعد نصف ثانية من إضافة class3
            }, 500); // 500 مللي ثانية

        }, 500); // 500 مللي ثانية

    }, 100); // 1000 مللي ثانية (1 ثانية)
}

// الاستخدام

document.getElementById('got-it').addEventListener('click', () => {
    const myElement = document.querySelector('#loader');
    addClassesSequentially(myElement, 'get-down', 'get-up', 'none');
});





// تعريف استعلامات الميديا
const mediaQuery767 = window.matchMedia('(max-width: 767px)');
const mediaQuery991 = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
const mediaQuery1199 = window.matchMedia('(min-width: 992px) and (max-width: 1199px)');
const mediaQuery1200 = window.matchMedia('(min-width: 1200px)');

// وظيفة المعالجة
function handleMediaQueryChange() {
    if (mediaQuery767.matches) {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });
    } else if (mediaQuery991.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }, navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if (mediaQuery1199.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }, navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else if (mediaQuery1200.matches) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }, navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

// إضافة مستمعين لتغييرات الاستعلامات
mediaQuery767.addEventListener('change', handleMediaQueryChange);
mediaQuery991.addEventListener('change', handleMediaQueryChange);
mediaQuery1199.addEventListener('change', handleMediaQueryChange);
mediaQuery1200.addEventListener('change', handleMediaQueryChange);

// الفحص الأولي
handleMediaQueryChange();


var swiperTwo = new Swiper(".mySwiperTwo", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});