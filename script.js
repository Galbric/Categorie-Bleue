const header = document.getElementById("header-bleu");
const main = document.getElementById("main-project");
const menu = document.getElementById("header-bleu-menu");
const btnMenu = document.getElementById("header-bleu-btn-menu");

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




// function openMenu() {
//   if (window.innerHeight < 1024) {
//     if (btnMenu.value == "close") {
//       menuHeight();
//       header.classList.add("open");
//       btnMenu.classList.add("open");
//       btnMenu.value = "open";
//     }else {
//       header.classList.remove("open");
//       btnMenu.classList.remove("open");
//       setTimeout(mainPosition, 300);
//       btnMenu.value = "close";
//     }
//   }else {
//     alert("too big");
//   }
// }

// function openMenu() {
//   if (window.innerHeight >= 1024) {
//     alert("toobig");
//   }else {
//     if (btnMenu.value == "close") {
//       menuHeight();
//       header.classList.add("open");
//       btnMenu.classList.add("open");
//       btnMenu.value = "open";
//     }else {
//       header.classList.remove("open");
//       btnMenu.classList.remove("open");
//       setTimeout(mainPosition, 300);
//       btnMenu.value = "close";
//     }
//   }
// }
