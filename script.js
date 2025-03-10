document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const themeToggleButton = document.querySelector(".theme-toggle");
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Dark Mode/Light Mode Toggle
  themeToggleButton.addEventListener("click", () => {
    // Toggle dark-mode class on the body
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Change the icon based on the current theme
    const icon = themeToggleButton.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      themeToggleButton.title = "Switch to Light Mode";
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      themeToggleButton.title = "Switch to Dark Mode";
    }
  });

  // Ensure the correct mode is loaded on page load
  if (!body.classList.contains("dark-mode") && !body.classList.contains("light-mode")) {
    // Default to light mode if no preference
    body.classList.add("light-mode");
  }

  // Burger Menu Toggle
  burgerMenu.addEventListener("click", () => {
    // Toggle the active class to show/hide nav links
    navLinks.classList.toggle("active");

    // Change burger icon
    const icon = burgerMenu.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close the burger menu when a link is clicked (for better UX)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");

        // Reset the burger icon
        const icon = burgerMenu.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("input", () => {
    suggestions.classList.add("show");
    suggestions.innerHTML = `
      <p>Suggestion 1</p>
      <p>Suggestion 2</p>
      <p>Suggestion 3</p>
    `;
  });
});