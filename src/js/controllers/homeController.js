import { elements } from "./../views/base";
import * as firstScreenViews from "./../views/home/firstScreenViews";
import * as secondScreenViews from "./../views/home/secondScreenViews";
import * as utils from "./../views/utils";
import * as logoViews from "./../views/home/logoViews";
import Logo from "./../models/Logo";
import Canvas from "./../models/Canvas";
import Circle from "./../models/Circle";
import * as menuViews from "./../views/home/menuViews";
import Menu from "./../models/Menu";
import { page } from "./../models/page";
import * as pageViews from "./../views/home/pageViews";
import * as canvasHeaderViews from "./../views/home/canvasHeaderViews";
import * as drawCanvasViews from "./../views/home/drawCanvasViews";

export function renderHome() {
  utils.removeCildren(elements.root);
  firstScreenViews.addFirstLogo();
  // window.addEventListener("DOMContentLoaded", () => {
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
          openSection,
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
  const openSection = (e) => {
    if (e.target.classList.contains("menu__li")) {
      pageViews.showLisContent(e, page, drawCanvas);
    }
  };

  const drawCanvas = (e) => {
    if (elements.root.firstChild) {
      state.arrow = new Circle(
        5,
        5,
        0.3,
        document.querySelector(
          `.section__arrow-container--${e.target.firstChild.nodeValue}`
        ),
        "section__canvas",
        1,
        1
      );

      drawCanvasViews.drawCanvas(page.arrow, state.arrow);
    }
  };
  // });
}
