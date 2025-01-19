const headerButton = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav');
const bodyPage = document.querySelector('.page-body');
const navLink = navMenu.querySelectorAll('.nav__link');
const navList = navMenu.querySelector('.nav__list');
const form = document.querySelector('.form__main');
const inputs = form.querySelectorAll('.form__field');
const formBtn = form.querySelector('.form__button');
const SubmitButtonText = {
  IDLE: 'Отправить',
  SENDING: 'Отправляю...'
};
const MAX_TABLET_WIDTH = 1150;

export {headerButton, navMenu, navLink, bodyPage, navList, form, inputs, formBtn, SubmitButtonText, MAX_TABLET_WIDTH};
