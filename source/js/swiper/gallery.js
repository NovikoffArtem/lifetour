import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

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
