////////






/**
 * product filter
 */

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productItems = document.querySelectorAll('.product-list li');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter-btn');

      productItems.forEach(function (item) {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Show items that match the filter and hide others
      productItems.forEach(function (item) {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Add active class to the clicked button and remove it from others
      filterButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});


// const filterBtns = document.querySelectorAll("[data-filter-btn]");
// const filterBox = document.querySelector("[data-filter]");

// let lastClickedFilterBtn = filterBtns[0];

// const filter = function () {
//   lastClickedFilterBtn.classList.remove("active");
//   this.classList.add("active");
//   lastClickedFilterBtn = this;

//   filterBox.setAttribute("data-filter", this.dataset.filterBtn)
// }

// addEventOnElem(filterBtns, "click", filter);