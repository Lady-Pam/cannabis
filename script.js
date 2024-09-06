let currentSlide = 0;
const images = document.querySelectorAll('.slider-image');

function showSlide(index) {
    // Ensure index is within bounds
    if (index >= images.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = images.length - 1;
    }

    // Remove 'active' class from all images and add it to the current slide
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === currentSlide) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevImage() {
    currentSlide--;
    showSlide(currentSlide);
}

// Initialize the first slide as active
showSlide(currentSlide);
