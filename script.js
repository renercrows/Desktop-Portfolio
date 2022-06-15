<<<<<<< HEAD
const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');    
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
}))

document.querySelectorAll('.hamburguer').forEach(n => n.
addEventListener('click', () => {
    navLogo.classList.toggle('active');
}))
=======
const img = document.querySelector('.union0');
const menu = document.querySelector('.second-menu');
const li = document.querySelectorAll('.second-menu li');
const listItem = Array.from(li);
const menuTgl = () => {
  menu.classList.toggle('visibility');
};
img.addEventListener('click', menuTgl);
listItem.forEach((child) => {
  child.addEventListener('click', menuTgl);
});
document.getElementById('clickme').onclick = function click() {
  this.classList.toggle('active');
};
>>>>>>> 0dcf44006f6eb875f96d294a083682b42043b6cb
