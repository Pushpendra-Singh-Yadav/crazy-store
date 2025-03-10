// Toggle Navbar for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Filter & Sorting
const sizeFilter = document.getElementById('size-filter');
const colorFilter = document.getElementById('color-filter');
const sortOptions = document.getElementById('sort-options');

sizeFilter.addEventListener('change', () => {
  console.log(`Size selected: ${sizeFilter.value}`);
});

colorFilter.addEventListener('change', () => {
  console.log(`Color selected: ${colorFilter.value}`);
});

sortOptions.addEventListener('change', () => {
  console.log(`Sort selected: ${sortOptions.value}`);
});
