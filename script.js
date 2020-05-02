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



function soundPlayer(button, title) {
  if (button.value == "OFF") {
  document.getElementById(title).play();
  button.innerHTML = "<img src='img/PauseButton.svg' alt='play button'>";
  button.value = "ON";
}else {
  document.getElementById(title).pause();
  button.innerHTML = "<img src='img/PlayButton.svg' alt='play button'>";
  button.value = "OFF";
}
}





//
// var myVar = setInterval(leftAutoScroll ,100);
// function mouseDown() {
//   const item = document.getElementById("photoScroll");
// }
// function mouseUp() {
//   const item = document.getElementById("photoScroll");
//   clearInterval(myVar);
// }
// function leftAutoScroll() {
//   const item = document.getElementById("photoScroll");
//   item.scrollLeft -= 50;
// }

// setInterval(function(){item.scrollLeft -= 50;}, 100);

//HORIZONTAL SCROLL

// const item = document.getElementById("photoScroll");
//
// item.addEventListener('wheel', function(e) {
//   if (e.deltaY > 0) item.scrollLeft += 50;
//   else item.scrollLeft -= 50;
// });
