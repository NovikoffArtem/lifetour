import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const setupHeroSwiper = () => {
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
setupHeroSwiper();

export const setupTrainingSwiper = () => {
  if(document.querySelector('.trainers')){
    new Swiper('.trainers', {
      loop: false,
      allowTouchMove: true,
      modules: [Navigation],
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button--trainer-next',
        prevEl: '.swiper-button--trainer-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 2,
        },
        550: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
          allowTouchMove: false,
        },
      },

    });
  }
};
setupTrainingSwiper();


export const setupToursSwiper = () => {
  if(document.querySelector('.tours__swiper')){
    new Swiper('.tours__swiper', {
      loop: false,
      allowTouchMove: true,

      modules: [Navigation],
      spaceBetween: 18,
      navigation: {
        nextEl: '.swiper-button--tours-next',
        prevEl: '.swiper-button--tours-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },

        1150: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

      },

    });
  }
};
setupToursSwiper();

export const setupReviewsSwiper = () => {
  if(document.querySelector('.reviews__swiper')){
    new Swiper('.reviews__swiper', {
      loop: false,
      allowTouchMove: true,

      modules: [Navigation],
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button--review-next',
        prevEl: '.swiper-button--review-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },

        1150: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

      },

    });
  }
};
setupReviewsSwiper();

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

const sectionTitle = document.querySelectorAll('h2');

const setAttrToTitle = () => {

  sectionTitle.forEach((e) => e.setAttribute('data-title', `${e.textContent}`),
  );
};
setAttrToTitle();


// const addClassToTitle = () => {
//   document.querySelector('.about h2').classList.add('section-title');
// };
// addClassToTitle();
