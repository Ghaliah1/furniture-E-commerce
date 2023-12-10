//Products Filtering
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-list li');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter-btn');
      // Remove active class from all product items
      productItems.forEach(function (item) {
        item.classList.remove('active');
      });

      // Show items that match the filter and hide others, also add active class to matching items
      productItems.forEach(function (item) {
        if (filter === 'all') {
          item.style.display = 'block';
          item.classList.add('active');
        } else if (item.classList.contains(filter)) {
          item.style.display = 'block';
          item.classList.add('active');
        } else {
          item.style.display = 'none';
        }
      });

      // Remove active class from all buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      // Add active class to the clicked button
      this.classList.add('active');
    });
  });
});