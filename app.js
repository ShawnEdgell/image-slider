let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

// Generate dots based on number of slides
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

    document.querySelector('.slides').style.transform = `translateX(-${n * 800}px)`;
    dots[currentIndex].style.backgroundColor = 'gray';
    currentIndex = n;
    dots[currentIndex].style.backgroundColor = 'black';
}

// Auto slide every 5 seconds
setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);
