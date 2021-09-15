const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.main-nav');
const navitems = document.querySelector('nav-items');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navbar.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbar.classList.remove('open');
    menuOpen = false;
  }
});

navitems.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navbar.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navbar.classList.remove('open');
    menuOpen = false;
  }
});