const buttonOpenMenu = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const countDaysText = document.querySelector('.intro__text-days');
const beforeActionText = document.querySelector('.intro__before-action-text');
const dateIvent = new Date(2022, 03, 18);
let dateNow = new Date();

const openAndCloseMenu = () => {
  menu.classList.toggle('menu_visible-active');
}

const calculateDays = (dateIvent, dateNow) => {
  return (Math.floor((dateIvent - dateNow) / 86400000));
}

const printCount = () => {
  const countDays = calculateDays(dateIvent, dateNow);
  let countDaysForSwitch = countDays;
  if (countDays >= 10)
    countDaysForSwitch = countDays % 10;
  switch (true) {
    case ((countDaysForSwitch === 0) || (countDaysForSwitch >= 5 && countDaysForSwitch <= 9)) :
      beforeActionText.textContent = 'До начала акции осталось:';
      countDaysText.textContent = countDays + ' дней';
      break;
    case countDaysForSwitch >= 2 && countDaysForSwitch <= 4 :
      beforeActionText.textContent = 'До начала акции осталось:';
      countDaysText.textContent = countDays + ' дня';
      break;
    case countDaysForSwitch === 1 :
      beforeActionText.textContent = 'До начала акции остался:';
      countDaysText.textContent = countDays + ' день';
      break;
  }
}

buttonOpenMenu.addEventListener('click', openAndCloseMenu);
printCount();
