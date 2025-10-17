// navbar2.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get the main elements
  const hamburger = document.getElementById("hamburger"); // The hamburger icon
  const navLinks = document.getElementById("navLinks"); // The main navigation links list

  // 2. Main Mobile Menu Toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      // Toggle the 'show' class on navLinks to display/hide the menu
      navLinks.classList.toggle("show");
      // Toggle the 'active' class on hamburger to animate the icon
      hamburger.classList.toggle("active");
    });
  }

  // 3. Mobile Dropdown Toggle for 'has-dropdown' items
  const dropdownItems = document.querySelectorAll(
    ".nav-links .has-dropdown > a"
  );

  dropdownItems.forEach((link) => {
    // Add event listener to the main dropdown link
    link.addEventListener("click", (e) => {
      // Only execute the custom mobile logic on mobile screens (as defined by CSS)
      // We check if the 'navLinks' is currently using the mobile display (flex/show class)
      if (
        window.getComputedStyle(navLinks).display === "flex" &&
        navLinks.classList.contains("show")
      ) {
        e.preventDefault(); // Prevent default link navigation on mobile

        // Find the parent <li> and the dropdown <ul>
        const parentLi = link.closest("li");
        const dropdownMenu = parentLi.querySelector(".dropdown-menu");

        if (dropdownMenu) {
          // Close all other dropdowns
          document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
            if (menu !== dropdownMenu) {
              menu.classList.remove("show");
            }
          });

          // Toggle the 'show' class for the current dropdown menu
          dropdownMenu.classList.toggle("show");
        }
      }
    });
  });

  // 4. Close the mobile menu when a non-dropdown link is clicked
  const simpleLinks = document.querySelectorAll(
    "#navLinks > li:not(.has-dropdown) a"
  );

  simpleLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Check if the menu is open (on mobile) before trying to close it
      if (navLinks.classList.contains("show")) {
        // Delay closing to allow the link click to register
        setTimeout(() => {
          navLinks.classList.remove("show");
          hamburger.classList.remove("active");
          // Also close any open sub-dropdowns
          document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
            menu.classList.remove("show");
          });
        }, 300);
      }
    });
  });
});
