////////






/**
 * product filter
 */

// // Get the filter buttons and product list container
// const filterBtns = document.querySelectorAll('.filter-btn');
// const productContainer = document.querySelector('.grid-container');

// // Add click event listener to filter buttons
// filterBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const filter = btn.getAttribute('data-filter-btn');
    
//     // Remove active class from all filter buttons and add it to the clicked button
//     filterBtns.forEach(b => b.classList.remove('active'));
//     btn.classList.add('active');

//     // Filter the product cards based on the clicked button's filter value
//     const filteredCards = Array.from(productContainer.getElementsByClassName('product-list')).filter(card => {
//       if (filter === 'all') {
//         return true;
//       } else {
//         return card.getAttribute('data-filter') === filter;
//       }
//     });

//     // Clear the product container
//     productContainer.innerHTML = '';

//     // Insert the filtered cards into the product container with a new position
//     filteredCards.forEach((card, index) => {
//       const colIndex = index % 3;
//       const rowIndex = Math.floor(index / 3);

//       // Create a new grid item and insert the filtered card
//       const gridItem = document.createElement('div');
//       gridItem.classList.add('grid-item');
//       gridItem.style.gridColumn = colIndex + 1;
//       gridItem.style.gridRow = rowIndex + 1;
//       gridItem.appendChild(card);

//       // Append the grid item to the product container
//       productContainer.appendChild(gridItem);
//     });
//   });
// });




















////////good one

// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const productItems = document.querySelectorAll('.product-list li');
//   const desks = document.querySelectorAll('.desks');

//   filterButtons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       const filter = this.getAttribute('data-filter-btn');

//       productItems.forEach(function (item) {
//         if (filter === 'all' || item.classList.contains(filter)) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       });

//       // Show items that match the filter and hide others
//       productItems.forEach(function (item) {
//         if (filter === 'all' || item.classList.contains(filter)) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       });

//       // Add active class to the clicked button and remove it from others
      
// this.classList.add('active');
// const iconName = this.getAttribute('data-icon');
// const iconElement = document.querySelector('.' + iconName);
// if (iconElement) {
//   iconElement.classList.add('active');
// } 
//       // desks.forEach(function (desks) {
//       //   desks.classList.remove('active');
//       // });
      
//       // this.classList.add('active');
 
//     });
//   });
// });





////////////////9dec

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


























// ///codim modifie class name
// filterButtons.forEach(function (btn) {
//   btn.classList.remove('active');
//   const iconName = btn.getAttribute('data-icon'); // Assuming the data-icon attribute stores the class name of the related <i> element
//   const iconElement = document.querySelector('.' + iconName);
//   if (iconElement) {
//     iconElement.classList.remove('active');
//   }
// });

// this.classList.add('active');
// const iconName = this.getAttribute('data-icon');
// const iconElement = document.querySelector('.' + iconName);
// if (iconElement) {
//   iconElement.classList.add('active');
// } 
////////////////////////////////////////////////////////



// // codiem
// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const productItems = document.querySelectorAll('.product-list li');

//   filterButtons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       const filter = this.getAttribute('data-filter-btn');

//       // Hide all products
//       productItems.forEach(function (item) {
//         item.style.display = 'none';
//       });

//       // Show items that match the filter
//       productItems.forEach(function (item) {
//         if (filter === 'all' || item.classList.contains(filter)) {
//           item.style.display = 'block';
//         }
//       });

//       // Adjust the positions of displayed products
//       const displayedProducts = document.querySelectorAll('.product-list li[style="display: block;"]');
//       let colIndex = 0;
//       let rowIndex = 0;

//       displayedProducts.forEach(function (product) {
//         product.style.gridColumn = colIndex + 1;
//         product.style.gridRow = rowIndex + 1;

//         colIndex++;

//         if (colIndex === 3) {
//           colIndex = 0;
//           rowIndex++;
//         }
//       });

//       // Add active class to the clicked button and remove it from others
//       filterButtons.forEach(function (btn) {
//         btn.classList.remove('active');
//       });
//       this.classList.add('active');
//     });
//   });
// });




// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const productItems = document.querySelectorAll('.product-list li');

//   filterButtons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       const filter = this.getAttribute('data-filter-btn');

//       // Store the filtered items in an array
//       const filteredItems = [];

//       // Hide all items initially
//       productItems.forEach(function (item) {
//         item.style.display = 'none';
//       });

//       // Show items that match the filter and add them to the array
//       productItems.forEach(function (item) {
//         if (filter === 'all' || item.classList.contains(filter)) {
//           item.style.display = 'block';
//           filteredItems.push(item);
//         }
//       });

//       // Update the positions of the filtered items
//       filteredItems.forEach(function (item, index) {
//         item.style.gridColumn = (index % 3) + 1; // Set the grid column position (3 items per row)
//         item.style.gridRow = Math.floor(index / 3) + 1; // Set the grid row position (3 items per row)
//       });

//       // Add active class to the clicked button and remove it from others
//       filterButtons.forEach(function (btn) {
//         btn.classList.remove('active');
//       });
//       this.classList.add('active');
//     });
//   });
// });


























// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const productItems = document.querySelectorAll('.product-list .product-item');

//   filterButtons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       const filter = this.getAttribute('data-filter-btn');

//       // Show items that match the filter and hide others
//       productItems.forEach(function (item) {
//         if (filter === 'all' || item.classList.contains(filter)) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       });

//       // Add active class to the clicked button and remove it from others
//       filterButtons.forEach(function (btn) {
//         btn.classList.remove('active');
//       });
//       this.classList.add('active');
//     });
//   });
// });























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