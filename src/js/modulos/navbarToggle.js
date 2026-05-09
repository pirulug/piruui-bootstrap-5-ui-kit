(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".piru-nav-toggle");
    const navMenu = document.querySelector(".piru-nav-menu");
    const body = document.body;

    if (navToggle && navMenu) {
      // Main Menu Toggle
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-active");
        navMenu.classList.toggle("is-active");
        body.classList.toggle("overflow-hidden");
      });

      // Close menu on link click (Mobile)
      navMenu.addEventListener("click", (e) => {
        const target = e.target.closest("a");
        if (target && !target.closest(".piru-nav-dropdown") && window.innerWidth < 992) {
          navToggle.classList.remove("is-active");
          navMenu.classList.remove("is-active");
          body.classList.remove("overflow-hidden");
        }
      });

      // Dropdown Toggle (Mobile)
      const dropdowns = navMenu.querySelectorAll(".piru-nav-dropdown");
      dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(".piru-nav-link");
        const panel = dropdown.querySelector(".piru-dropdown-panel");

        if (link && panel) {
          link.addEventListener("click", (e) => {
            if (window.innerWidth < 992) {
              e.preventDefault();
              e.stopPropagation();
              
              // Close other dropdowns
              dropdowns.forEach(other => {
                if (other !== dropdown) {
                  other.querySelector(".piru-dropdown-panel")?.classList.remove("is-visible");
                  other.querySelector(".bi-chevron-down")?.classList.remove("rotate-180");
                }
              });

              panel.classList.toggle("is-visible");
              link.querySelector(".bi-chevron-down")?.classList.toggle("rotate-180");
            }
          });
        }
      });
    }

    // --- Search Logic ---
    const openSearch = document.getElementById("openSearch");
    const closeSearch = document.getElementById("closeSearch");
    const searchOverlay = document.getElementById("piruSearchOverlay");
    const searchInput = document.getElementById("piruSearchInput");

    if (openSearch && searchOverlay) {
      openSearch.addEventListener("click", () => {
        searchOverlay.classList.add("is-active");
        setTimeout(() => searchInput?.focus(), 300);
      });

      closeSearch.addEventListener("click", () => {
        searchOverlay.classList.remove("is-active");
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") searchOverlay.classList.remove("is-active");
      });
    }
    
    // --- Announcement Bar Close ---
    const announcementBar = document.getElementById("announcementBar");
    const closeAnnouncement = document.getElementById("closeAnnouncement");
    
    if (announcementBar && closeAnnouncement) {
      closeAnnouncement.addEventListener("click", () => {
        announcementBar.classList.add("is-hidden");
        // Remove from DOM after animation
        setTimeout(() => {
          announcementBar.style.display = "none";
        }, 300);
      });
    }

    // --- Scroll Logic (Sticky Navbar) ---
    const navMain = document.querySelector(".piru-nav-main");
    
    const handleScroll = () => {
      if (navMain) {
        const threshold = 50;
        if (window.scrollY > threshold) {
          navMain.classList.add("nav-scrolled");
        } else if (window.scrollY < threshold - 10) {
          navMain.classList.remove("nav-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Reset state on window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        navToggle?.classList.remove("is-active");
        navMenu?.classList.remove("is-active");
        body.classList.remove("overflow-hidden");
        navMenu?.querySelectorAll(".piru-dropdown-panel").forEach(p => p.classList.remove("is-visible"));
      }
    });
  });
})();
