import { elements } from "./js/views/base";
import "./sass/main.scss";
import * as firstScreenViews from "./js/views/firstScreenViews";
import * as secondScreenViews from "./js/views/secondScreenViews";
import * as utils from "./js/views/utils";
import * as logoViews from "./js/views/logoViews";
import Logo from "./js/models/Logo";
import Canvas from "./js/models/Canvas";
import * as menuViews from "./js/views/menuViews";
import Menu from "./js/models/Menu";
import * as canvasHeaderViews from "./js/views/canvasHeaderViews";

firstScreenViews.addFirstLogo();
window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  utils.addFonts();
  const state = {};
  getMenu();
  function changeScreens() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  //first animation
  changeScreens()
    .then(firstScreenViews.addAnimation)
    .then(utils.addVisuallyHiddenLater(".first-screen"))
    .then(secondScreenViews.addSecondScreen)
    .then(addLogo)
    .then(function () {
      return canvasHeaderViews.createCanvas();
    })
    .then(function () {
      return utils.removeVisuallyHidden(".second-screen");
    })
    .then(function () {
      return setTimeout(function () {
        secondScreenViews.createTitle(document.querySelector(".second-screen"));
      }, 2000);
    })
    .then(function () {
      return setTimeout(function () {
        utils.addClass(
          document.querySelector(".second-screen__title"),
          "title_move-right"
        );
      }, 6000);
    })
    .then(function () {
      return setTimeout(function () {
        menuViews.createMenu(
          document.querySelector(".second-screen"),
          state.menuTitles.titles
        );
      }, 6100);
    })
    .catch();

  async function addLogo() {
    state.logo = new Logo();
    await state.logo.getLogoData();
    state.canvas = new Canvas(
      150,
      100,
      "canvas__logo",
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
  async function getMenu() {
    state.menuTitles = new Menu();
    await state.menuTitles.getMenuData();
    // state.menuTitles = state.menuTitles.result;
    return state.Titles;
  }
  //canvas menu hover
  document.addEventListener("mouseover", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("menu__li")) {
      menuViews.createMenuTitle(e, document.querySelector(".second-screen"));
      state.menuCanvas = new Canvas(
        500,
        300,
        "menu-title-canvas",
        0,
        0,
        10,
        10,
        0,
        0,
        0.5,
        document.querySelector(
          `.${e.target.firstChild.nodeValue}-menu-title-canvas__container`
        ),
        0,
        0
      );
      await menuViews.drawMenuTitle(
        e,
        state.menuTitles.result,
        state.menuCanvas
      );
      menuViews.showMenuTitle(e);
      e.target.addEventListener("mouseout", menuViews.removeMenuTitle);
    }
  });
  document.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("menu__li")) {
      menuViews.showLisContent(e);
    }
  });
});
