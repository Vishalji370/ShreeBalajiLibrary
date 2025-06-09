document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  // Toggle menu open/close
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevents triggering the outside click event
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

  // Optional: Close menu when a nav link is clicked (mobile UX)
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
