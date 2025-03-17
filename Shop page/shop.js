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

// Filters and Sorting Functionality
document.addEventListener("DOMContentLoaded", () => {
  const sizeFilter = document.getElementById("size-filter");
  const colorFilter = document.getElementById("color-filter");
  const sortOptions = document.getElementById("sort-options");
  const productGrid = document.getElementById("products");

  sizeFilter.addEventListener("change", () => {
    filterProducts();
  });

  colorFilter.addEventListener("change", () => {
    filterProducts();
  });

  sortOptions.addEventListener("change", () => {
    sortProducts();
  });

  function filterProducts() {
    // Add logic to filter products based on size and color
    console.log("Filtering by size:", sizeFilter.value, "color:", colorFilter.value);
  }

  function sortProducts() {
    // Add logic to sort products based on selected option
    console.log("Sorting by:", sortOptions.value);
  }
});

// Navbar scroll background change
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});