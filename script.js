const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.main-nav');
const NI1 = document.querySelector('.ni1');
const NI2 = document.querySelector('.ni2');
const NI3 = document.querySelector('.ni3');
const NI4 = document.querySelector('.ni4');
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

NI1.addEventListener('click', () => {
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
NI2.addEventListener('click', () => {
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
NI3.addEventListener('click', () => {
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
NI4.addEventListener('click', () => {
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