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
