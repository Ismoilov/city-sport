import $ from "jquery";
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import './common';

$(".tes-carousel").slick({
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow: $(".down"),
  prevArrow: $(".up"),
});

$('.sport-types').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$('.nav-link').on('click', function (e) {
  e.preventDefault();
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
  $('.tab').removeClass('active');
  var tabID = $(this).attr('data-target');
  $('.tab[data-tab="' + tabID + '"]').addClass('active');
});

// -----------Navbar slide------------------
// let navLinks = document.querySelectorAll('.nav-links li');
// let burger = document.querySelector('.navigation .burger');
// let nav = document.querySelector('.nav-wrapper');
// let backdrop = document.querySelector('.backdrop');
// const body = document.querySelector('body');

// function closeAllMenu() {
//   // Toggle nav
//   nav.classList.remove('nav-active');
//   burger.classList.remove('toggle');
//   backdrop.classList.remove('backdrop-active');
//   body.classList.remove('burger-clicked');
//   navLinks.forEach((link) => {
//     link.style.animation = '';
//   });
// }

// let navSlide = function () {
//   let searchMobile = document.querySelector('.search-mobile');
//   let mobileInput = document.querySelector('.mobile-input');
//   const closeMobileInput = document.querySelector('.mobile-input .closeSearch');
//   const mobileClose = document.querySelector('.for-mobile button img')

//   if (burger) {
//     burger.addEventListener('click', () => {

//       // Toggle nav
//       nav.classList.toggle('nav-active');
//       body.classList.toggle('burger-clicked');
//       backdrop.classList.toggle('backdrop-active');
//       // Animate Links
//       navLinks.forEach((link, index) => {
//         // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//         if (link.style.animation) {
//           link.style.animation = '';
//         }
//         else {
//           link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.4}s`;
//         }
//       });
//       // Burger animation
//       burger.classList.toggle('toggle');

//     });

//     backdrop.addEventListener('click', closeAllMenu)
//     mobileClose.addEventListener('click', closeAllMenu);

//     // searchMobile.addEventListener('click', () => {
//     //   mobileInput.classList.toggle('clicked')
//     // });

//     // closeMobileInput.addEventListener('click', () => {
//     //   mobileInput.classList.remove('clicked')
//     // });
//   }
// }

// let searchSlide = function searchSlide() {
//   const search = document.querySelector('nav .search');
//   const close = document.querySelector('nav .closeSearch');
//   const input = document.querySelector('nav .search-btn .input-group');
//   if (search && close) {
//     search.addEventListener('click', function () {
//       // Toggle search
//       input.classList.toggle('active')
//     });
//     close.addEventListener('click', function () {
//       input.classList.remove('active');
//     });
//   }
// };

// const functions = () => {
//   // searchSlide();
//   navSlide();
// }
// navSlide();

// function lang() {
//   const otherLangs = document.querySelector('nav .lang div');
//   otherLangs.classList.add('active');
// }

// Language dropdown
// const langWrapper = document.querySelector('nav .lang');

// langWrapper.addEventListener('click', () => {
//   langWrapper.classList.toggle("active");
// })


