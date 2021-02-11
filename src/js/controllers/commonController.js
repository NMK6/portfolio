import * as logoViews from "./../views/logoViews";
import Logo from "./../models/Logo";
import Menu from "./../models/Menu";
import Canvas from "./../models/Canvas";
import * as utils from "./../views/utils";
import * as menuViews from "./../views/menuViews";
import { elements } from "./../views/base";
export const commonState = {};
export async function addLogo(parentState, parent) {
  parentState.logo = new Logo();
  await parentState.logo.getLogoData();
  parentState.canvas = new Canvas(
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
    parent,
    0,
    0
  );

  await logoViews.drawLogo(parentState.logo.result.logo, parentState.canvas);
}
utils.addFonts();
//canvas menu hover
export function handleMouseoverMenu(e) {
  e.preventDefault();
  if (!commonState.menuCanvas) {
    commonState.menuCanvas = new Canvas(
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
  await menuViews.drawMenuTitle(
    e,
    commonState.menuTitles.result,
    commonState.menuCanvas
  );

  e.target.addEventListener("mouseout", function () {
    menuViews.removeMenuTitle(commonState.menuCanvas);
  });
};
export async function getMenu() {
  commonState.menuTitles = new Menu();
  await commonState.menuTitles.getMenuData();

  return commonState.menuTitles;
}
