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
