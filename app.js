// Simple navigation highlight (optional)
const navLinks = document.querySelectorAll(".nav-item");

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#ff0000";
  }
});
