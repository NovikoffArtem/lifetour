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
        renderBullet: (index, className) => `<button class="${className}" type="button" tabindex='0'><span class="visually-hidden">Слайд ${index + 1}</span></button>`,
        keyboard: true,
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

const activeSlide = document.querySelector('.hero .swiper-slide-active');
const link = activeSlide.querySelector('.hero__link');
link.setAttribute('tabindex', '-1');


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
      spaceBetween: 18,

      modules: [Navigation],
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
      spaceBetween: 15,
      slidesPerView: 'auto',

      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button--review-next',
        prevEl: '.swiper-button--review-prev',
      },

      breakpoints: {
        320: {
          centeredSlides: true,
        },
        450: {
          centeredSlides: false,
          spaceBetween: 30,
        },
        768: {
          spaceBetween: 30,
          centeredSlides: false,
        },

        1150: {
          spaceBetween: 30,
        },
        1440: {
          spaceBetween: 120,
        },

      },

    });
  }
};
setupReviewsSwiper();

// свайпер Преимуществ
const dublicateElem = (parrent) => {
  const parrentList = document.querySelector(parrent);
  const childElements = parrentList.children;
  Array.from(childElements).forEach((elem) => {
    parrentList.insertAdjacentHTML('beforeend', elem.outerHTML);
  });
};


const deleteDublicate = (parrent) => {
  const parrentList = document.querySelector(parrent);
  const childElems = parrentList.children;
  const newList = new Set();

  Array.from(childElems).forEach((elem) => {
    const text = elem.textContent;
    if(newList.has(text)) {
      parrentList.removeChild(elem);
    } else {
      newList.add(text);
    }
  });
};

let advSwiper;
export const setupAdvSwiper = () => {
  if(document.querySelector('.advantages__swiper')){
    advSwiper = new Swiper('.advantages__swiper', {
      direction: 'horizontal',
      breakpoints: {
        1: {
          enabled: false,
        },
        1150: {
          enabled: true,
        }
      },
      loop: true,
      simulateTouch: false,
      slidesPerView: 5,
      slidesPerGroup: 2,
      initialSlide: 1,
      spaceBetween: 0,
      centeredSlides: true,
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button--advantage-next',
        prevEl: '.swiper-button--advantage-prev',
      },

    });
  }
};

function destroySwiper(swiper) {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;

  }
}

export const setupGallerySwiper = () => {
  if(document.querySelector('.gallery__swiper')){
    new Swiper('.gallery__swiper', {
      loop: true,
      slidesPerView: 'auto',
      modules: [Navigation],
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button--gallery-next',
        prevEl: '.swiper-button--gallery-prev',
      },
      breakpoints: {
        768: {
          enabled: true,
          spaceBetween: 5,
        },
        1281: {
          spaceBetween: 0,
          enabled: false,
        }
      },

    });
  }
};
setupGallerySwiper();

function handleResize() {
  if (window.innerWidth >= 1150) {
    if (!advSwiper) {
      dublicateElem('.advantages__list');
      setupAdvSwiper();
    }
  } else {
    destroySwiper(advSwiper);
    deleteDublicate('.advantages__list');
  }

}

handleResize();

window.addEventListener('resize', handleResize);


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
