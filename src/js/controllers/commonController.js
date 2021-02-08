import * as logoViews from "./../views/logoViews";
import Logo from "./../models/Logo";
import Canvas from "./../models/Canvas";
import * as utils from "./../views/utils";

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
