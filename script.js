// Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle Menu
navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('active');
});

// Close menu on clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});
// JavaScript for Contact Modal
const contactLink = document.getElementById("contact-link");
const contactModal = document.getElementById("contact-modal");
const closeModal = document.querySelector(".close-modal");

// Open Modal
contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "flex";
});

// Close Modal on Close Button
closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Close Modal by Clicking Outside
contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// Go to Top Button Functionality
const goToTopButton = document.getElementById('goToTop');

// Show or Hide Button on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goToTopButton.classList.add('show');
  } else {
    goToTopButton.classList.remove('show');
  }
});

// Scroll to Top Smoothly
goToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});