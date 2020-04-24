const header = document.getElementById("header-bleu");
const main = document.getElementById("main-project");
const menu = document.getElementById("header-bleu-menu");
const btnMenu = document.getElementById("header-bleu-btn-menu");

window.addEventListener("resize", mainPosition);
btnMenu.addEventListener("click", openMenu);
menu.addEventListener("click", openMenu);

function init() {
  mainPosition();
  menuHeight();
}

function mainPosition() {
  main.style.top = header.offsetHeight + "px";
}

function menuHeight() {
  let x = menu.childElementCount * 44;
  document.documentElement.style.setProperty('--menuHeight', x + "px");
}

function openMenu() {
  if (window.innerWidth < 1024) {
    menuHeight();
    header.classList.toggle("open");
    btnMenu.classList.toggle("open");
    setInterval(mainPosition, 10);
  }
}
