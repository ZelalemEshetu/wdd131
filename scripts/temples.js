// Dynamic footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    menuButton.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column"; // ensure vertical layout on mobile
    menuButton.textContent = "✖";
  }
});