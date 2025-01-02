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
