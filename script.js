const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.hamburguer').forEach((n) => n.addEventListener('click', () => {
  navLogo.classList.toggle('active');
}));
