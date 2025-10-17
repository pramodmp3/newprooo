// navbar.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Fetch the Navbar HTML content
  fetch("navbar.html")
    .then((res) => res.text())
    .then((data) => {
      // 2. Inject the HTML into the placeholder
      const navbarContainer = document.getElementById("navbar");
      if (navbarContainer) {
        navbarContainer.innerHTML = data;

        // 3. 🔑 Now that the HTML exists, we can find and attach event listeners
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        if (menuToggle && navLinks) {
          // Listen for the hamburger click
          menuToggle.addEventListener("click", () => {
            // Toggles the 'active' class used by CSS to show/hide the menu
            navLinks.classList.toggle("active");
          });

          // Optional: Logic to close the menu when a link is clicked
          const mobileLinks = navLinks.querySelectorAll(
            "li:not(.has-dropdown) a"
          );
          mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
              // Small delay allows navigation to start before closing
              setTimeout(() => {
                if (navLinks.classList.contains("active")) {
                  navLinks.classList.remove("active");
                }
              }, 300);
            });
          });
        }
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu-items");
  const subHeaderToggles = document.querySelectorAll(".mobile-link.sub-header");

  if (!toggleButton || !mobileMenu) {
    console.error("Mobile menu elements not found.");
    return;
  }

  // Function to handle the main mobile menu toggle
  toggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");

    // Toggle the 'open' class on the menu content
    mobileMenu.classList.toggle("open");
    toggleButton.classList.toggle("is-active");

    // Update ARIA attributes
    toggleButton.setAttribute("aria-expanded", !isOpen);
    mobileMenu.setAttribute("aria-hidden", isOpen);

    // Close all sub-menus when the main menu closes
    if (isOpen) {
      subHeaderToggles.forEach((header) => {
        const targetId = header.getAttribute("data-target");
        const subMenu = document.getElementById(targetId);
        if (subMenu && subMenu.style.maxHeight) {
          subMenu.style.maxHeight = null;
          header.querySelector(".arrow").textContent = "▼";
        }
      });
    }
  });

  // Function to handle nested sub-menu toggles
  subHeaderToggles.forEach((header) => {
    header.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = header.getAttribute("data-target");
      const subMenu = document.getElementById(targetId);
      const arrow = header.querySelector(".arrow");

      if (subMenu.style.maxHeight) {
        // If sub-menu is open, close it
        subMenu.style.maxHeight = null;
        arrow.textContent = "▼";
      } else {
        // Close all other sub-menus first
        document
          .querySelectorAll(".mobile-sub-menu")
          .forEach((otherSubMenu) => {
            if (otherSubMenu !== subMenu) {
              otherSubMenu.style.maxHeight = null;
              document.querySelector(
                `[data-target="${otherSubMenu.id}"] .arrow`
              ).textContent = "▼";
            }
          });

        // Open the current sub-menu (set max-height to enable CSS transition)
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        arrow.textContent = "▲";
      }
    });
  });
});
