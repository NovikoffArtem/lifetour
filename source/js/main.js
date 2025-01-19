import { setupHeroSwiper } from './swiper/hero.js';
import { setupTrainingSwiper } from './swiper/training-card.js';
import { setupToursSwiper } from './swiper/tours.js';
import { setupReviewsSwiper } from './swiper/reviews.js';
import { handleResize } from './utils/utils.js';
import { setAttrToTag } from './utils/utils.js';
import { setupGallerySwiper } from './swiper/gallery.js';
import { changeMenu } from './header/burger.js';
import { headerButton } from './constants/constans.js';
import { submitForm } from './form/form.js';
import { setupPhoneMask } from './form/phone-mask.js';

document.addEventListener('DOMContentLoaded', () => {
  setupHeroSwiper();
  setupTrainingSwiper();
  setupToursSwiper();
  setupReviewsSwiper();
  setAttrToTag('h2');
  setAttrToTag('.button--primary');
  setupGallerySwiper();
  handleResize();
  window.addEventListener('resize', handleResize);
  headerButton.addEventListener('click', changeMenu);
  submitForm();
  setupPhoneMask();
});
