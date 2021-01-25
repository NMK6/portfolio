import { elements } from './js/views/base';
import style from './sass/main.scss';
import * as firstScreenViews from './js/views/firstScreenViews';
import * as secondScreenViews from './js/views/secondScreenViews';
import * as utils from './js/views/utils';
import * as logoViews from './js/views/logoViews';
import Logo from './js/models/Logo';
import Canvas from './js/models/Canvas';
import * as menuViews from './js/views/menuViews';

firstScreenViews.addFirstLogo();
window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const state = {};

  function changeScreens() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  changeScreens()
    .then(firstScreenViews.addAnimation)
    .then(utils.addVisuallyHiddenLater('.first-screen'))
    .then(secondScreenViews.addSecondScreen)
    .then(addLogo)
    .then(function () {
      return utils.removeVisuallyHidden('.second-screen');
    })
    .then(function () {
      return setTimeout(function () {
        secondScreenViews.createTitle(document.querySelector('.second-screen'));
      }, 2000);
    })
    .then(function () {
      return setTimeout(function () {
        utils.addClass(
          document.querySelector('.second-screen__title'),
          'title_move-right'
        );
      }, 6000);
    })
    .then(function () {
      return setTimeout(function () {
        menuViews.createMenu(document.querySelector('.second-screen'));
      }, 6100);
    })
    .catch();

  async function addLogo() {
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

    await logoViews.drawLogo(state.logo.result.logo, state.canvas);
  }
});
