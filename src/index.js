import { elements } from "./js/views/base";
import "./sass/main.scss";
import * as firstScreenViews from "./js/views/firstScreenViews";
import * as secondScreenViews from "./js/views/secondScreenViews";
import * as utils from "./js/views/utils";
import * as logoViews from "./js/views/logoViews";
import Logo from "./js/models/Logo";
import Canvas from "./js/models/Canvas";
import Circle from "./js/models/Circle";
import * as menuViews from "./js/views/menuViews";
import Menu from "./js/models/Menu";
import { page } from "./js/models/page";
import * as pageViews from "./js/views/pageViews";
import * as canvasHeaderViews from "./js/views/canvasHeaderViews";
import * as drawCanvasViews from "./js/views/drawCanvasViews";

firstScreenViews.addFirstLogo();
window.addEventListener("DOMContentLoaded", () => {
  //preload fonts
  utils.addFonts();
  const state = {};

  function changeScreens() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  //first animation
  changeScreens()
    .then(firstScreenViews.addAnimation)
    .then(function () {
      return utils.delay(firstScreenViews.removeFirstScreen, 3000);
    })
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
          state.menuTitles.titles,
          handleMouseoverMenu
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

    return state.menuTitles;
  }
  getMenu();
  //canvas menu hover
  function handleMouseoverMenu(e) {
    e.preventDefault();
    if (!state.menuCanvas) {
      state.menuCanvas = new Canvas(
        470,
        170,
        "menu-title-canvas",
        0,
        0,
        10,
        10,
        0,
        0,
        0.5,
        document.querySelector(".menu-title-canvas__container"),
        0,
        0
      );
    }
    if (e.target.classList.contains("menu__li") && elements.width > 600) {
      showTitlesOnHover(e);
    } else {
      return;
    }
  }

  const showTitlesOnHover = async (e) => {
    await menuViews.drawMenuTitle(e, state.menuTitles.result, state.menuCanvas);

    e.target.addEventListener("mouseout", function () {
      menuViews.removeMenuTitle(state.menuCanvas);
    });
  };
  document.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("menu__li")) {
      pageViews.showLisContent(e, page, drawCanvas);
    }
  });

  const drawCanvas = (e) => {
    state.arrow = new Circle(
      5,
      5,
      1,
      document.querySelector(
        `.section__arrow-container--${e.target.firstChild.nodeValue}`
      ),
      "section__canvas",
      1,
      1
    );

    drawCanvasViews.drawCanvas(page.arrow, state.arrow);
  };
});
