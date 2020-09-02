const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let index = 0;

const displaySlide = (index) => {
    // Hide slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    // Display next or prev slide
    slides[index].style.display = 'flex';
};

const nextSlide = () => {
    index++;
    // Check it index is above max
    if (index > slides.length - 1) {
        // Reset index
        index = 0;
    }
    displaySlide(index);
};

const prevSlide = () => {
    index--;
    // Check if index is below beginning
    if (index < 0) {
        // Set index to last slide
        index = slides.length - 1;
    }
    displaySlide(index);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Only display first slide initially
displaySlide(index);