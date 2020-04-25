//VARIABLES
const header = document.getElementsByClassName("header");
const menu = document.getElementById("header-menu");
const btnMenu = document.getElementsByClassName("btn-menu");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

//EVENT LISTENERS
let menuItem = menu.querySelectorAll("h3"),result;
for (let i = 0; i < menuItem.length; i++) {
  result = menuItem[i];
  result.addEventListener('click', openMenu);
}

window.addEventListener("resize", layoutPosition);
window.addEventListener("resize", menuHeight);

//DOM MANIPULATION
document.getElementById("year").innerHTML = new Date().getFullYear();

//FUNCTIONS
function init() {
  layoutPosition();
  menuHeight();
}

function layoutPosition() {
  main.style.top = header[0].offsetHeight + "px";
  if (window.innerWidth < 1024) {
    footer.style.top = header[0].offsetHeight + "px";
  }else {
    footer.style.top = "auto";
  }
}

function menuHeight() {
  let x = menu.childElementCount * menuItem[0].clientHeight;
  document.documentElement.style.setProperty('--menuHeight', x + "px");
}

function openMenu() {
  if (window.innerWidth < 1024) {
    menuHeight();
    header[0].classList.toggle("open");
    btnMenu[0].classList.toggle("open");
    setInterval(layoutPosition, 10);
  }
}
