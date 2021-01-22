import { elements } from './js/views/base';
import style from './sass/main.scss';
import * as firstScreenViews from './js/views/firstScreenViews';
import * as secondScreenViews from './js/views/secondScreenViews';
import * as utils from './js/views/utils';
import * as logoViews from './js/views/logoViews';
import Logo from './js/models/Logo';
import Canvas from './js/models/Canvas';
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
  state.canvas = new Canvas(
    150,
    100,
    'canvas__logo',
    70,
    70,
    1.1,
    1.1,
    18,
    24,
    0.3,
    elements.root,
    0,
    0
  );

  console.log(state.logo.result.logo[0]);

  await logoViews.drawLogo(state.logo.result.logo, state.canvas);
};
addLogo();
