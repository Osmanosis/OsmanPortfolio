document.addEventListener('DOMContentLoaded', (event) => {
    // استعادة الوضع الحالي من localStorage
    let currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }
    changeImages();
    updateToggleButton()
    updateToggleButtonTwo()
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
        showNoti("Dark Mode On", "#1f1f1fcd", "#fff")

    } else {
        localStorage.setItem('mode', 'light');
        showNoti("Light Mode On", "#ffffffcd", "#1f1f1f")
    }
    changeImages(); // تحديث الصور بعد تبديل الوضع
    updateToggleButton();
    updateToggleButtonTwo()
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

function updateToggleButtonTwo() {
    var toggleButton = document.getElementById('mobileToggle');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.classList.remove('fa-sun', 'fas');
        toggleButton.classList.add('fa-moon', 'far');
    } else {
        toggleButton.classList.remove('fa-moon', 'far');
        toggleButton.classList.add('fa-sun', 'fas');
    }
}

function showNoti(mode, bgColor, textColor) {
    let noti = document.getElementById("dark-noti")
    noti.innerText = mode;
    noti.style.backgroundColor = bgColor;
    noti.style.color = textColor;
    noti.classList.add('anim-show');
    setTimeout(() => {
        noti.classList.remove('anim-show');
    }, 1000)
}

// Burger Menu for mobiles

const burger = document.querySelector('.icon');
const xbtn = document.querySelector('.x-button');
const navLinks = document.querySelector('.mobile-ul');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // burger.classList.toggle('toggle');
});
xbtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // burger.classList.toggle('toggle');
});



VanillaTilt.init(document.querySelector(".project"), {
    max: 20,
    speed: 350
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".project"));


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }

        // else {
        //     entry.target.classList.remove("show")
        // }
    })
})

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach((el) => observer.observe(el))

// script.js
function showNotification(event) {
    event.preventDefault();
    var notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(function () {
        notification.classList.remove("show");
        notification.classList.add("hide");

        setTimeout(function () {
            notification.classList.remove("hide");
            // notification.style.display = "none";
        }, 500); // يجب أن يكون متطابقاً مع مدة transition للـ opacity في CSS
    }, 1000);
}

// const upBtn = document.getElementById("upTopBtn");

// window.addEventListener("scroll", () => {
//     const halfPage = document.documentElement.scrollHeight / 2;
//     if (window.scrollY > halfPage) {
//         upBtn.classList.add("show");
//     } else {
//         upBtn.classList.remove("show");
//     }
// });

// upBtn.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });

//     upBtn.classList.add("uphide")
//     setTimeout(() => {
//         upBtn.classList.remove("uphide")
//     }, 1000)
// });

const scrollers = document.querySelectorAll(".scroller")

addAnimation();

function addAnimation() {

    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true)

        const scrollerInner = scroller.querySelector(".my-skills-list")
        const scrollerContent = Array.from(scrollerInner.children)

        scrollerContent.forEach(item => {
            const duplicatedItems = item.cloneNode(true)

            duplicatedItems.setAttribute("aria-hidden", true)
            scrollerInner.appendChild(duplicatedItems)
        })
    })

}