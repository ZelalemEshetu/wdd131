// ================= HAMBURGER MENU =================
// ================= HAMBURGER MENU =================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle nav visibility on hamburger click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// ================= FOOTER DATES =================
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
