//VARIABLES
const header = document.getElementsByClassName("header");
const menu = document.getElementById("header-menu");
const btnMenu = document.getElementsByClassName("btn-menu");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const btnDescription = document.getElementById("btn-description");
const longDescription = document.getElementById("long-description");
const btnShow = document.getElementById("btn-show");

//EVENT LISTENERS
let menuItem = menu.querySelectorAll("h3"),result;
for (let i = 0; i < menuItem.length; i++) {
  result = menuItem[i];
  result.addEventListener('click', openMenu);
}

window.addEventListener("resize", layoutPosition);
window.addEventListener("resize", menuHeight);
window.addEventListener("resize", resizeElement);
window.addEventListener("scroll", selectMenu);

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

function moreDescription() {
  if (btnDescription.value == "OFF") {
    longDescription.style.display = "flex";
    btnDescription.value = "ON";
    btnDescription.innerHTML = "read less <i class=\"fas fa-sort-up\"></i>";
    btnDescription.querySelector("i").classList.add("open");
  }else {
    longDescription.style.display = "none";
    btnDescription.value = "OFF";
    btnDescription.innerHTML = "read more <i class=\"fas fa-sort-up\"></i>";
    btnDescription.querySelector("i").classList.remove("open");
  }
}

function moreShow() {
  const longShow = document.getElementById("shows").querySelectorAll("div");
  if (btnShow.value == "OFF") {
    for (let i = 4; i < longShow.length; i++) {
      longShow[i].classList.remove("more");
    }
    btnShow.value = "ON";
    btnShow.innerHTML = "less shows <i class=\"fas fa-sort-up\"></i>";
    btnShow.querySelector("i").classList.add("open");
  }else {
    for (let i = 4; i < longShow.length; i++) {
      longShow[i].classList.add("more");
    }
    btnShow.value = "OFF";
    btnShow.innerHTML = "more shows <i class=\"fas fa-sort-up\"></i>";
    btnShow.querySelector("i").classList.remove("open");
  }
}

function resizeElement() {
  if (document.body.getAttribute('data-page') == 'Page-project') {
    const longShow = document.getElementById("shows").querySelectorAll("div");
    if (window.innerWidth > 1024) {
      for (let i = 4; i < longShow.length; i++) {
        longShow[i].classList.add("more");
      }
      btnShow.value = "OFF";
      btnShow.innerHTML = "more shows <i class=\"fas fa-sort-up\"></i>";
      btnShow.querySelector("i").classList.remove("open");
      longDescription.style.display = "flex";
    } else {
      longDescription.style.display = "none";
      btnDescription.value = "OFF";
      btnDescription.innerHTML = "read more <i class=\"fas fa-sort-up\"></i>";
      btnDescription.querySelector("i").classList.remove("open");
    }
  }
}

function soundPlayer(button, title) {
  if (button.value == "OFF") {
  document.getElementById(title).play();
  button.innerHTML = "<img src='img/PauseButton.svg' alt='play button'>";
  button.value = "ON";
  } else {
  document.getElementById(title).pause();
  button.innerHTML = "<img src='img/PlayButton.svg' alt='play button'>";
  button.value = "OFF";
  }
}

function stopPlayer(button) {
  document.getElementById(button). innerHTML = "<img src='img/PlayButton.svg' alt='play button'>";
}


function selectMenu() {
  if (document.body.getAttribute('data-page') == 'Page-index') {
    let banners = document.querySelectorAll('.banner');
    let menuItems = document.querySelectorAll('.menu h3');
    if (banners[1].getBoundingClientRect().top > window.innerHeight / 2) {
      menuItems[0].style.fontWeight = "Bold";
      menuItems[1].style.fontWeight = "400";
      menuItems[2].style.fontWeight = "400";
    } else if (banners[1].getBoundingClientRect().top < window.innerHeight / 2
  && banners[2].getBoundingClientRect().top > window.innerHeight / 2) {
    menuItems[0].style.fontWeight = "400";
    menuItems[1].style.fontWeight = "Bold";
    menuItems[2].style.fontWeight = "400";
    } else {
      menuItems[0].style.fontWeight = "400";
      menuItems[1].style.fontWeight = "400";
      menuItems[2].style.fontWeight = "Bold";
    }
  }
}



// if (document.body.getAttribute('data-page') == 'Page-index') {
//   alert('page-index');
// }
// if (document.body.getAttribute('data-page') == 'Page-project') {
//   alert('page-project');
// }
