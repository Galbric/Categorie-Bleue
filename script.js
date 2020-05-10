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




function galleryBig(photo, index) {

  if (window.innerWidth >= 1024) {

    let allPhotos = document.querySelectorAll('.photoWrapper img');
    let i = index;
    console.log(i);

    let overlay = document.createElement('div');
      overlay.style.position = 'absolute';
      overlay.style.top = '0px';
      overlay.style.left = '0px';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'black';
      overlay.style.opacity = 0.8;
      overlay.style.zIndex = 200;
        document.body.appendChild(overlay);

    let photoFocus = document.createElement('img');
    photoFocus.src = photo.src;
      photoFocus.style.position = 'absolute';
      photoFocus.style.top = '50%';
      photoFocus.style.transform = 'translate(-50%, -50%)';
      photoFocus.style.left = '50%';
      photoFocus.style.width = '85vw';
      photoFocus.style.height = '65vh';
      photoFocus.style.objectFit = 'contain';
      photoFocus.style.zIndex = 300;
      document.body.appendChild(photoFocus);

    let photoCredit = document.createElement('p');
    photoCredit.innerHTML = allPhotos[i].name;
      photoCredit.style.fontFamily = "Raleway";
      photoCredit.style.fontSize = "16px";
      photoCredit.style.color = '#eee';
      photoCredit.style.position = 'absolute';
      photoCredit.style.top = '84vh';
      photoCredit.style.right = '15vw';
      photoCredit.style.textAlign = 'right';
      photoCredit.style.zIndex = 300;
      document.body.appendChild(photoCredit);

    let previousPhoto = document.createElement('img');
    previousPhoto.src = 'img/GaucheBlanc.svg';
      previousPhoto.style.position = 'absolute';
      previousPhoto.style.top = '50%';
      previousPhoto.style.left = '1.25vw';
      previousPhoto.style.width = '5vw';
      previousPhoto.style.height = '5vw';
      previousPhoto.style.transform = 'translateY(-50%)';
      previousPhoto.style.zIndex = 300;
      previousPhoto.style.cursor = 'pointer';
      document.body.appendChild(previousPhoto);

      previousPhoto.addEventListener('click', ()=>{
        if (i != 0) {
          i--;
        } else {
          i = allPhotos.length - 1;
        }
        console.log(i);
        photoFocus.src = allPhotos[i].src;
        photoCredit.innerHTML = allPhotos[i].name;
      });

    let nextPhoto = document.createElement('img');
    nextPhoto.src = 'img/GaucheBlanc.svg';
      nextPhoto.style.position = 'absolute';
      nextPhoto.style.top = '50%';
      nextPhoto.style.right = '1.25vw';
      nextPhoto.style.width = '5vw';
      nextPhoto.style.height = '5vw';
      nextPhoto.style.transform = 'translateY(-50%) rotate(180deg)';
      nextPhoto.style.zIndex = 300;
      nextPhoto.style.cursor = 'pointer';
      document.body.appendChild(nextPhoto);

      nextPhoto.addEventListener('click', ()=>{
        if (i != allPhotos.length - 1) {
          i++;
        } else {
          i = 0;
        }
        console.log(i);
        photoFocus.src = allPhotos[i].src;
        photoCredit.innerHTML = allPhotos[i].name;
      });

    let closeGallery = document.createElement('img');
    closeGallery.src = 'img/closeGallery.svg';
      closeGallery.style.position ='absolute';
      closeGallery.style.top = '5%';
      closeGallery.style.right = '5%';
      closeGallery.style.width = '5vw';
      closeGallery.style.height = '5vw';
      closeGallery.style.zIndex = 300;
      closeGallery.style.cursor = 'pointer';
      document.body.appendChild(closeGallery);

      closeGallery.addEventListener('click', ()=>{
        overlay.remove();
        photoFocus.remove();
        photoCredit.remove();
        previousPhoto.remove();
        nextPhoto.remove();
        closeGallery.remove();
      });
  }
}
