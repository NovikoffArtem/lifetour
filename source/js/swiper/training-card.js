import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';


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
