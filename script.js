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

document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get the form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Send form data to the server
    const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.success); // Show success message
    } else {
        alert(result.error); // Show error message
    }
});