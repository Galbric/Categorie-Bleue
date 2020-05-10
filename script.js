//VARIABLES
const header = document.getElementsByClassName("header");
const menu = document.getElementById("header-menu");
const btnMenu = document.getElementsByClassName("btn-menu");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const btnDescription = document.getElementById("btn-description");
const longDescription = document.getElementById("long-description");
const btnShow = document.getElementById("btn-show");
const photoWrapper = document.getElementById("photoWrapper");


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

function selectMenu(){
  if (document.body.getAttribute('data-page') == 'Page-index') {
    let banners = document.querySelectorAll(".banner");
    let bannersTop = [];
    for (let i = 0; i < menuItem.length - 2; i++) {
      bannersTop.push(banners[i].getBoundingClientRect().top);
    }
    bannersTop.push(window.innerHeight);
    for (let i = 0; i < banners.length; i++) {
      menuItem[i].style.fontWeight = "400";
    }
    function isActive(value) {
      return value > window.innerHeight / 2;
    }
    menuItem[bannersTop.findIndex(isActive) - 1].style.fontWeight = 700;
  }
}

function goRight(){
let next = photoWrapper.scrollLeft + window.innerWidth / 2.5;
  photoWrapper.scrollTo({
    left: next,
    behavior: 'smooth'
  });
}
function goLeft(){
let prev = photoWrapper.scrollLeft - window.innerWidth / 2.5;
  photoWrapper.scrollTo({
    left: prev,
    behavior: 'smooth'
  });
}
