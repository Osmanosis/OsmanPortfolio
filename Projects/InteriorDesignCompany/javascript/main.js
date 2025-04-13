document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('animation').classList.add('show');
    setTimeout(() => {
        document.getElementById('animation').classList.remove('show');
        document.getElementById('animation').classList.remove('hidden');
    }, 1000); // 1000 milliseconds = 1 second
});




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



const burger = document.querySelector('.fa-bars-staggered');
const navLinks = document.querySelector('.mobile-menu .mobile-ul');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // burger.classList.toggle('toggle');
});

const close = document.querySelector('.fa-x')

close.addEventListener("click", () => {
    navLinks.classList.toggle('active');
})


// Swiper

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});