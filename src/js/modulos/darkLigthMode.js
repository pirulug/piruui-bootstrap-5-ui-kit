(() => {
  "use strict";

  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    // Default to system preference if no theme is set
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  };

  const updateThemeIcon = (theme) => {
    const themeIcon = document.querySelector("#bd-theme-icon");
    if (themeIcon) {
      if (theme === "light") {
        themeIcon.innerHTML = '<i class="bi bi-sun me-1"></i>';
      } else if (theme === "dark") {
        themeIcon.innerHTML = '<i class="bi bi-moon me-1"></i>';
      }
    }
  };

  const toggleTheme = () => {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    updateThemeIcon(newTheme);
  };

  window.addEventListener("DOMContentLoaded", () => {
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);
    updateThemeIcon(currentTheme);

    const themeToggleButton = document.querySelector("#bd-theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", toggleTheme);
    }
  });
})();
