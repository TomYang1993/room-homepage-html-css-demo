const sliderData = [
    {
        desktopImage: './images/desktop-image-hero-1.jpg',
        mobileImage: './images/mobile-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    },
    {
        desktopImage: './images/desktop-image-hero-2.jpg',
        mobileImage: './images/mobile-image-hero-2.jpg',
        title: 'We are available all across the globe',
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        desktopImage: './images/desktop-image-hero-3.jpg',
        mobileImage: './images/mobile-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
];

const hamburger = document.getElementById('hamburger');
const closeNav = document.getElementById('close-nav');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');
const heroImageContainer = document.getElementById('hero-image');
const heroTitle = document.getElementById('hero-title');
const heroText = document.getElementById('hero-text');

let currentSlide = 0;

// Mobile Menu Functionality
function toggleMenu() {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
closeNav.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Slider Functionality
function updateSlide() {
    const slide = sliderData[currentSlide];

    // Update Content
    heroTitle.textContent = slide.title;
    heroText.textContent = slide.text;

    // Update Images
    heroImageContainer.innerHTML = `
    <picture>
      <source media="(min-width: 1000px)" srcset="${slide.desktopImage}">
      <img src="${slide.mobileImage}" alt="${slide.title}">
    </picture>
  `;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= sliderData.length) {
        currentSlide = 0;
    }
    updateSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = sliderData.length - 1;
    }
    updateSlide();
}

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

