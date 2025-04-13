document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('animation').classList.add('show');
    setTimeout(() => {
        document.getElementById('animation').classList.remove('show');
        document.getElementById('animation').classList.remove('hidden')
    }, 1000); // 1000 milliseconds = 1 second
    // استعادة الوضع الحالي من localStorage
    let currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }
    changeImages();
    updateToggleButton()
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



function changeImages() {
    if (document.body.classList.contains('dark-mode')) {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            if (img.src.includes("light")) {
                img.src = img.src.replace("light", "dark");
            }
        }
    } else {
        var images = document.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            if (img.src.includes("dark")) {
                img.src = img.src.replace("dark", "light");
            }
        }
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');

    } else {
        localStorage.setItem('mode', 'light');
    }
    changeImages(); // تحديث الصور بعد تبديل الوضع
    updateToggleButton();
}

function updateToggleButton() {
    var toggleButton = document.getElementById('toggleButton');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.classList.remove('fa-sun', 'fas');
        toggleButton.classList.add('fa-moon', 'far');
    } else {
        toggleButton.classList.remove('fa-moon', 'far');
        toggleButton.classList.add('fa-sun', 'fas');
    }
}



const burger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.mobile-menu .menu-mob');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // burger.classList.toggle('toggle');
});

const close = document.querySelector('.fa-x')

close.addEventListener("click", () => {
    navLinks.classList.toggle('active');
})

var swiper = new Swiper(".mySwiper", {
    // direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


