const img = document.querySelector(".union0");
const menu = document.querySelector(".second-menu");
const li = document.querySelectorAll(".second-menu li")

let listItem = Array.from(li);

let menuTgl = ()=> {
    menu.classList.toggle("visibility"); }

img.addEventListener("click", menuTgl);

listItem.forEach(child => {
    child.addEventListener("click", menuTgl);
});

document.getElementById('clickme').onclick=function() {
    this.classList.toggle('active');
   }
