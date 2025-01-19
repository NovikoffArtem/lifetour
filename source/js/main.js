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

// бургер
const headerButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav');
const bodyPage = document.querySelector('.page-body');
const navLink = navMenu.querySelectorAll('.nav__link');
const navList = navMenu.querySelector('.nav__list');

const changeMenu = () => {
  navMenu.classList.toggle('nav--opened');
  bodyPage.classList.toggle('page-body--block');
  navList.toggleAttribute('inert');

  if(navMenu.classList.contains('nav--opened')) {
    headerButton.setAttribute('aria-expanded', 'true');
  } else {
    headerButton.setAttribute('aria-expanded', 'false');
  }

  navLink.forEach((e) => e.addEventListener('click', () => {
    if ((navMenu.classList.contains('nav--opened')) && (window.innerWidth < 1150)) {
      navMenu.classList.remove('nav--opened');
      bodyPage.classList.remove('page-body--block');
      navList.setAttribute('inert', '');
    }
  }));
};


headerButton.addEventListener('click', changeMenu);

const setAttrToTitle = (elem) => {
  const sectionTitle = document.querySelectorAll(elem);
  sectionTitle.forEach((e) => e.setAttribute('data-title', `${e.textContent}`),
  );
};

setAttrToTitle('h2');
setAttrToTitle('.button--primary');


function handleResize() {
  if (window.innerWidth >= 1150) {
    if (!advSwiper) {
      dublicateElem('.advantages__list');
      setupAdvSwiper();
    }
    navList.removeAttribute('inert');
  } else {
    destroySwiper(advSwiper);
    deleteDublicate('.advantages__list');

    if(!navMenu.classList.contains('nav--opened')) {
      navList.setAttribute('inert', '');
    }
  }

}

handleResize();

window.addEventListener('resize', handleResize);


const form = document.querySelector('.form__main');
const inputs = form.querySelectorAll('.form__field');
const formBtn = form.querySelector('.form__button');
const SubmitButtonText = {
  IDLE: 'Отправить',
  SENDING: 'Отправляю...'
};


const toggleSubmitButton = () => {
  formBtn.textContent = SubmitButtonText.SENDING;
  formBtn.disabled = true;

  setTimeout(() => {
    formBtn.textContent = SubmitButtonText.IDLE;
    formBtn.disabled = false;
  }, 500);
};

const clearFields = () => {
  setTimeout(() => {
    Array.from(inputs).forEach((input) => {
      input.value = '';
      input.style.border = '1px solid transparent';
    });
  }, 500);
};


export const submitForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    toggleSubmitButton();
    clearFields();
  });
};
submitForm();


const setupPhoneMask = () => {
  const phoneInput = document.querySelector('.form__field--phone');

  const getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  const onPhonePaste = function (e) {
    const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  const onPhoneInput = function (e) {
    const input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    const selectionStart = input.selectionStart;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      input.value = '';
      return ;
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] === '9') {
        formattedInputValue = `7${ inputNumbersValue}`;
      }
      const firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
      formattedInputValue = input.value = `${firstSymbols } `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${ inputNumbersValue.substring(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${ inputNumbersValue.substring(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${ inputNumbersValue.substring(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${ inputNumbersValue.substring(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${ inputNumbersValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
  };
  const onPhoneKeyDown = function (e) {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode === 8 && inputValue.length === 1) {
      e.target.value = '';
    }
  };

  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);

};
setupPhoneMask();
