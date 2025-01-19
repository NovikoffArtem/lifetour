import { setupAdvSwiper } from '../swiper/advantages';
import { advSwiper } from '../swiper/advantages';
import { navMenu } from '../constants/constans';
import { navList } from '../constants/constans';
import { formBtn } from '../constants/constans';
import { SubmitButtonText } from '../constants/constans';
import { inputs } from '../constants/constans';
import { MAX_TABLET_WIDTH } from '../constants/constans';

export const handleResize = () => {
  if (window.innerWidth >= MAX_TABLET_WIDTH) {
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
};
function dublicateElem (parrent) {
  const parrentList = document.querySelector(parrent);
  const childElements = parrentList.children;
  Array.from(childElements).forEach((elem) => {
    parrentList.insertAdjacentHTML('beforeend', elem.outerHTML);
  });
}


function deleteDublicate (parrent) {
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
}


function destroySwiper(swiper) {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;

  }
}

export const clearFields = () => {
  setTimeout(() => {
    Array.from(inputs).forEach((input) => {
      input.value = '';
      input.style.border = '1px solid transparent';
    });
  }, 500);
};

export const setAttrToTag = (elem) => {
  const sectionTitle = document.querySelectorAll(elem);
  sectionTitle.forEach((e) => e.setAttribute('data-title', `${e.textContent}`),
  );
};


export const toggleSubmitButton = (isDiasabled) => {
  formBtn.disabled = isDiasabled;
  formBtn.textContent = isDiasabled ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};
