let currentIndex = 0;
let autoScrollInterval;
let isAutoScrolling = true;

function showImage(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}


function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

function startAutoScroll() {
    autoScrollInterval = setInterval(nextImage, 3000); // Change image every 3 seconds
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function toggleAutoScroll() {
    const button = document.querySelector('.start-stop');
    if (isAutoScrolling) {
        stopAutoScroll();
        button.textContent = 'Start Auto Scroll';
    } else {
        startAutoScroll();
        button.textContent = 'Stop Auto Scroll';
    }
    isAutoScrolling = !isAutoScrolling;
}

function bookNow() {
    alert("Booking now...");
}

document.addEventListener('DOMContentLoaded', (event) => {
    startAutoScroll();
});
