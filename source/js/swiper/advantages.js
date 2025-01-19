import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

export let advSwiper;
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
