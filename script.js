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
    for (let i = 1; i < longShow.length; i++) {
      longShow[i].classList.remove("more");
    }
    btnShow.value = "ON";
    btnShow.innerHTML = "less shows <i class=\"fas fa-sort-up\"></i>";
    btnShow.querySelector("i").classList.add("open");
  }else {
    for (let i = 1; i < longShow.length; i++) {
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
      for (let i = 1; i < longShow.length; i++) {
        longShow[i].classList.add("more");
      }
      btnShow.value = "OFF";
      btnShow.innerHTML = "more shows <i class=\"fas fa-sort-up\"></i>";
      btnShow.querySelector("i").classList.remove("open");
      longDescription.style.display = "flex";
    } else {
     //longDescription.style.display = "none";
     //btnDescription.value = "OFF";
     // btnDescription.innerHTML = "read more <i class=\"fas fa-sort-up\"></i>";
     // btnDescription.querySelector("i").classList.remove("open");
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
let next = photoWrapper.scrollLeft + window.innerWidth / 1.5;
  photoWrapper.scrollTo({
    left: next,
    behavior: 'smooth'
  });
}
function goLeft(){
let prev = photoWrapper.scrollLeft - window.innerWidth / 1.5;
  photoWrapper.scrollTo({
    left: prev,
    behavior: 'smooth'
  });
}




function galleryBig(photo, index) {

    let allPhotos = document.querySelectorAll('.photoWrapper img');
    let i = index;
    let mainProject = document.querySelector('.main.project');
    let footerProject = document.querySelector('.footer.project');
    
        mainProject.style.position = 'fixed';
        footerProject.style.display = 'none';

      let photoGallery = document.createElement('div');
      photoGallery.classList.add('photoGallery');
      document.body.appendChild(photoGallery);

      let photoContent = document.createElement('div');
      photoContent.classList.add('photoContent');
      photoGallery.appendChild(photoContent);

      let photoFocus = document.createElement('img');
      photoFocus.src = photo.src;
      photoFocus.classList.add('photoFocus');
      photoContent.appendChild(photoFocus);

      let photoCredit = document.createElement('p');
      photoCredit.innerHTML = allPhotos[i].name;
      photoCredit.classList.add('photoCredit');
      photoContent.appendChild(photoCredit);

      let previousPhoto = document.createElement('img');
      previousPhoto.src = 'icon/GaucheBlanc.svg';
      previousPhoto.classList.add('previousPhoto');
      photoGallery.appendChild(previousPhoto);

      previousPhoto.addEventListener('click', ()=>{
        if (i != 0) {
          i--;
        } else {
          i = allPhotos.length - 1;
        }
        photoFocus.src = allPhotos[i].src;
        photoCredit.innerHTML = allPhotos[i].name;
      });

      let nextPhoto = document.createElement('img');
      nextPhoto.src = 'icon/GaucheBlanc.svg';
      nextPhoto.classList.add('nextPhoto');
      photoGallery.appendChild(nextPhoto);

      nextPhoto.addEventListener('click', ()=>{
        if (i != allPhotos.length - 1) {
          i++;
        } else {
          i = 0;
        }
        photoFocus.src = allPhotos[i].src;
        photoCredit.innerHTML = allPhotos[i].name;
      });

      let overlay = document.createElement('div');
      overlay.classList.add('overlay');
      photoGallery.appendChild(overlay);


      let closeGallery = document.createElement('img');
      closeGallery.src = 'icon/closeGallery.svg';
      closeGallery.classList.add('closeGallery');
      photoGallery.appendChild(closeGallery);

      closeGallery.addEventListener('click', ()=>{
        photoGallery.remove();
        mainProject.style.position = 'relative';
        footerProject.style.display = 'flex';
      });

}
