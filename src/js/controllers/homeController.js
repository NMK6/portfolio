import { elements } from "./../views/base";
import { createViewRoot } from "../views/rootView";
import * as firstScreenViews from "./../views/home/firstScreenViews";
import * as secondScreenViews from "./../views/home/secondScreenViews";
import * as utils from "./../views/utils";
// import Canvas from "./../models/Canvas";
import Circle from "./../models/Circle";
import * as menuViews from "../views/menuViews";
// import Menu from "./../models/Menu";
import { page } from "./../models/page";
import * as pageViews from "./../views/home/pageViews";
import * as canvasHeaderViews from "./../views/home/canvasHeaderViews";
import * as drawCanvasViews from "./../views/home/drawCanvasViews";
import * as commonController from "./commonController";
import { commonState } from "./commonController";

export function renderHome() {
  utils.removeChildren(elements.root, document.querySelector(".root__contact"));
  utils.removeChildren(
    elements.root,
    document.querySelector(".root__projects")
  );
  const state = {};
  state.root = createViewRoot("home");

  firstScreenViews.addFirstLogo(state.root);

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
      setTimeout(() => {
        firstScreenViews.removeFirstScreen(state.root);
      }, 3500);
    })
    .then(function () {
      state.secondScreen = secondScreenViews.addSecondScreen();
    })
    .then(function () {
      commonController.addLogo(state, state.root);
    })
    .then(function () {
      return canvasHeaderViews.createCanvas();
    })
    .then(function () {
      utils.removeVisuallyHidden(".second-screen");
    })
    .then(function () {
      setTimeout(() => {
        secondScreenViews.createTitle(state.secondScreen);
      }, 4000);
    })

    .then(function () {
      setTimeout(() => {
        menuViews.createMenu(
          state.secondScreen,
          commonState.menuTitles.titles,
          openSection,
          commonController.handleMouseoverMenu
        );
      }, 7000);
    })

    .catch();

  // async function getMenu() {
  //   state.menuTitles = new Menu();
  //   await state.menuTitles.getMenuData();

  //   return state.menuTitles;
  // }
  commonController.getMenu();

  // //canvas menu hover
  // function handleMouseoverMenu(e) {
  //   e.preventDefault();
  //   if (!state.menuCanvas) {
  //     state.menuCanvas = new Canvas(
  //       470,
  //       170,
  //       "menu-title-canvas",
  //       0,
  //       0,
  //       10,
  //       10,
  //       0,
  //       0,
  //       0.5,
  //       document.querySelector(".menu-title-canvas__container"),
  //       0,
  //       0
  //     );
  //   }
  //   if (e.target.classList.contains("menu__li") && elements.width > 600) {
  //     showTitlesOnHover(e);
  //   } else {
  //     return;
  //   }
  // }

  // const showTitlesOnHover = async (e) => {
  //   await menuViews.drawMenuTitle(e, state.menuTitles.result, state.menuCanvas);

  //   e.target.addEventListener("mouseout", function () {
  //     menuViews.removeMenuTitle(state.menuCanvas);
  //   });
  // };
  const openSection = (e) => {
    if (e.target.classList.contains("menu__li")) {
      pageViews.showLisContent(e, page, drawCanvas);
    }
  };

  const drawCanvas = (e) => {
    if (
      document.querySelector(
        `.section__arrow-container--${e.target.firstChild.nodeValue}`
      )
    ) {
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
}
