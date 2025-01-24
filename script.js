// script.js

// Detect when sections enter the viewport and add 'active' class for animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + section.offsetHeight / 3) {
            section.classList.add('active');
        }
    });
});
