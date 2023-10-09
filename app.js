let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const carouselContainer = document.querySelector('.carousel');
const slideWrapper = document.querySelector('.slides');

// Extract sliding logic to a separate function
function setSlidePosition() {
    const carouselWidth = carouselContainer.offsetWidth;
    slideWrapper.style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
}

slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        goToSlide(idx);
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
dots[0].style.backgroundColor = 'black';  // Active dot

document.querySelector('.prev').addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

function goToSlide(n) {
    if (n < 0) n = slides.length - 1;
    if (n > slides.length - 1) n = 0;

    dots[currentIndex].style.backgroundColor = 'gray';
    currentIndex = n;
    dots[currentIndex].style.backgroundColor = 'black';
    setSlidePosition();
}

// Auto slide every 5 seconds
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);

// Handle window resize
window.addEventListener('resize', () => {
    setSlidePosition();
});
