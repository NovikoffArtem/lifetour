import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';


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
