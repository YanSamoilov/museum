const buttonOpenMenu = document.querySelector('.header__button');
const menu = document.querySelector('.menu');

//Функция открытия и закрытия меню с навигацией в шапке.
const openAndCloseMenu = () => {
  menu.classList.toggle('menu_visible-active');
}

buttonOpenMenu.addEventListener('click', openAndCloseMenu);
