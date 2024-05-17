const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');
const navButtons = document.querySelector('.nav-buttons');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  navButtons.classList.toggle('show');
  closeBtn.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
  navButtons.classList.remove('show');
  closeBtn.classList.remove('show');
});
