import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';


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
