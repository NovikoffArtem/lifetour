import { navMenu } from '../constants/constans';
import { bodyPage } from '../constants/constans';
import { navList } from '../constants/constans';
import { headerButton } from '../constants/constans';
import { navLink } from '../constants/constans';

export const changeMenu = () => {
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
