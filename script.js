// Ambil elemen hamburger dan menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Klik hamburger -> buka/tutup menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Tutup menu kalau link diklik
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});