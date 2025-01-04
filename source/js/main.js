import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const setupJurySwiper = () => {
  if(document.querySelector('.hero__wrapper')){
    new Swiper('.hero__wrapper', {
      loop: true,
      slidesPerView: 1,
      allowTouchMove: true,

      modules: [Pagination],

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        1440: {
          allowTouchMove: false,
        },
      },
    });
  }
};
setupJurySwiper();

// бургер
const headerButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('.page-body');
const navLink = document.querySelectorAll('.nav__link');

const changeMenu = () => {
  navMenu.classList.toggle('nav--opened');
  body.classList.toggle('page-body--block');
  navLink.forEach((e) => e.addEventListener('click', () => {
    if (navMenu.classList.contains('nav--opened')) {
      navMenu.classList.remove('nav--opened');
      body.classList.remove('page-body--block');
    }
  }));
};


headerButton.addEventListener('click', changeMenu);

