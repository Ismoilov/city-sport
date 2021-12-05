window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// -----------Navbar slide------------------
let navLinks = document.querySelectorAll('.nav-links li');
let burger = document.querySelector('.navigation .burger');
let nav = document.querySelector('.nav-wrapper');
let backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

function closeAllMenu() {
  // Toggle nav
  nav.classList.remove('nav-active');
  burger.classList.remove('toggle');
  backdrop.classList.remove('backdrop-active');
  body.classList.remove('burger-clicked');
  navLinks.forEach((link) => {
    link.style.animation = '';
  });
}

let navSlide = function () {
  const mobileClose = document.querySelector('.for-mobile button img')

  if (burger) {
    burger.addEventListener('click', () => {
      // Toggle nav
      nav.classList.toggle('nav-active');
      body.classList.toggle('burger-clicked');
      backdrop.classList.toggle('backdrop-active');
      // Animate Links
      navLinks.forEach((link, index) => {
        // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        if (link.style.animation) {
          link.style.animation = '';
        }
        else {
          link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.4}s`;
        }
      });
      // Burger animation
      burger.classList.toggle('toggle');
    });

    backdrop.addEventListener('click', closeAllMenu)
    mobileClose.addEventListener('click', closeAllMenu);
  }
}

navSlide();

const modalBtn = document.querySelector('.error-msg');
const modalBackdrop = document.querySelector('.modal .backdrop');

modalBtn.addEventListener('click', () => {
  body.classList.add('modal-opened');
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () { window.scrollTo(x, y); };
})

modalBackdrop.addEventListener('click', () => {
  body.classList.remove('modal-opened');
  window.onscroll = function () { };
  document.querySelector('#message').value = '';
  document.querySelectorAll('.modal input').forEach(element => {
    element.value = '';
  });
})