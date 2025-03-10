document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  
  const sizeFilter = document.getElementById('size-filter');
  const colorFilter = document.getElementById('color-filter');
  const sortOptions = document.getElementById('sort-options');
  
  sizeFilter.addEventListener('change', () => {
    console.log(`Filtered by size: ${sizeFilter.value}`);
  });
  
  colorFilter.addEventListener('change', () => {
    console.log(`Filtered by color: ${colorFilter.value}`);
  });
  
  sortOptions.addEventListener('change', () => {
    console.log(`Sorted by: ${sortOptions.value}`);
  });
  