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
