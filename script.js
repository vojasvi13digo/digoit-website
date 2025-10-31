document.addEventListener('DOMContentLoaded', () => {
  // Button Interaction
  const ctaBtn = document.getElementById('cta-btn');
  ctaBtn.addEventListener('click', () => {
    alert('You clicked the Call-to-Action button!');
  });

  // Simple Contact Form Handler
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = "Thank you for contacting us!";
    form.reset();
    setTimeout(() => formMsg.textContent = '', 4000);
  });
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY < 10) {
    navbar.classList.remove('hide');
    lastScrollY = window.scrollY;
    return;
  }
  if (window.scrollY < lastScrollY) {
    // Scrolling up: hide navbar
    navbar.classList.add('hide');
  } else {
    // Scrolling down: show navbar
    navbar.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});
