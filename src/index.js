// import { elements } from './js/views/base';
import style from './sass/main.scss';
import * as firstScreenViews from './js/views/firstScreenViews';
import * as secondScreenViews from './js/views/secondScreenViews';
import * as utils from './js/views/utils';
import Logo from './js/models/Logo';
const state = {};
firstScreenViews.addFirstLogo();
window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  firstScreenViews.addAnimation();
  secondScreenViews.addSecondScreen();
  utils.addVisuallyHidden('.first-screen');

  utils.removeVisuallyHidden('.second-screen');
});
const addLogo = async () => {
  state.logo = new Logo();
  await state.logo.getLogoData();
};
addLogo();
