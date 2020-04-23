const header = document.getElementById("header-bleu");
const main = document.getElementById("main-project");

function mainPosition() {
  main.style.top = header.offsetHeight + "px";
}
function openMenu() {
  if (window.innerWidth < 1024) {
    header.classList.toggle("open");
  }
}
