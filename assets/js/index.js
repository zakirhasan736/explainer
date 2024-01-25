

var swiper = new Swiper(".swiper-latest-service-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true,
  // roundLengths: true,
  // direction: 'horizontal',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      loop: false,
  autoplay: {
    delay: 5000,
  },
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".our-offer-slider-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  // centeredSlides: false,
  // roundLengths: true,
  navigation: {
    nextEl: ".swiper-button-next-offer",
    prevEl: ".swiper-button-prev-offer",
  },
  pagination: {
    el: ".swiper-pagination-offer",
    clickable: true,
  },
  loop: true,
});


var swiper = new Swiper(".latest-development-wrap-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination-latest-dev",
    clickable: true,
  },
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination-latest-dev",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination-latest-dev",
        clickable: true,
      },
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination-latest-dev",
        clickable: true,
      },
    },
  },
});

// Function to toggle pagination visibility based on screen width
function togglePaginationVisibility() {
  var screenWidth = window.innerWidth;
  var pagination = document.querySelector(".swiper-pagination-latest-dev");

  // Show pagination only on mobile view (screen width less than or equal to 768)
  if (screenWidth <= 768) {
    pagination.style.display = "flex";
  } else {
    // Hide pagination on larger screens
    pagination.style.display = "none";
  }
}

// Call the function initially and on window resize
togglePaginationVisibility();
window.addEventListener("resize", togglePaginationVisibility);



document.addEventListener('DOMContentLoaded', function () {
const accordionItems = document.querySelectorAll('.faq-accordion-card-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-title-box');
    const detailsBox = item.querySelector('.accordion-details-box');

    header.addEventListener('click', () => {
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('open')) {
                otherItem.classList.remove('open');
                otherItem.querySelector('.accordion-details-box').classList.remove('flex');
                otherItem.querySelector('.accordion-details-box').classList.add('hidden');
            }
        });

        item.classList.toggle('open');

        // Toggle 'flex' and 'hidden' classes for accordion-details-box
        if (item.classList.contains('open')) {
            detailsBox.classList.add('flex');
            detailsBox.classList.remove('hidden');
        } else {
            detailsBox.classList.remove('flex');
            detailsBox.classList.add('hidden');
        }
    });
});
});



document.addEventListener("DOMContentLoaded", function () {
  const menuTriggerBtn = document.querySelector('.menu-trigger-btn');
  const menuCloseBtn = document.querySelector('.menu-close-btn');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const mobileNavMenuWrapper = document.querySelector('.mobile-nav-menu-wrapper');
  const dropdownIcons = document.querySelectorAll('.droparow-icons');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  // Function to open mobile menu
  function openMobileMenu() {
    mobileNavMenu.classList.add('active');
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileNavMenu.classList.remove('active');
    dropdownMenus.forEach(menu => {
      menu.classList.remove('active');
    });
  }

  // Function to toggle dropdowns
  function toggleDropdown(event) {
    const target = event.target;
    const isDropdownToggle = target.classList.contains('droparow-icons');

    if (isDropdownToggle) {
      const parentMenu = target.closest('.mobile-menu-nav-item').querySelector('.dropdown-menu');
      parentMenu.classList.toggle('active');
      event.stopPropagation(); // Prevent the menu from closing
    }
  }

  // Event listener for clicking the menu trigger button
  menuTriggerBtn.addEventListener('click', function () {
    openMobileMenu();
  });

  // Event listener for clicking the menu close button
  menuCloseBtn.addEventListener('click', function () {
    closeMobileMenu();
  });

  // Event listener for clicking outside the mobile menu wrapper to close the menu
  document.addEventListener('click', function (event) {
    if (!mobileNavMenuWrapper.contains(event.target) && !menuTriggerBtn.contains(event.target)) {
      closeMobileMenu();
    }
  });

  // Event listener for toggling dropdowns only on dropdown icon clicks
  dropdownIcons.forEach(icon => {
    icon.addEventListener('click', function (event) {
      const parentMenu = icon.closest('.mobile-menu-nav-item').querySelector('.dropdown-menu');
      const isActive = parentMenu.classList.contains('active');
      
      dropdownMenus.forEach(menu => {
        menu.classList.remove('active');
      });

      if (!isActive) {
        parentMenu.classList.add('active');
      } else {
        parentMenu.classList.remove('active');
      }

      event.stopPropagation(); // Prevent the menu from closing
    });
  });

  // Prevent closing the entire menu when clicking inside dropdown menus
  dropdownMenus.forEach(menu => {
    menu.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
});