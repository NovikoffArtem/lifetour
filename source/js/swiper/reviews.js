import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

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
