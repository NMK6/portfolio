import * as utils from "../utils";
export const addFirstLogo = (parent) => {
  const logo = `<div class="first-screen"><div class="first-screen__circle"><div class="first-screen__one first-screen__vertical"></div><div class="first-screen__two first-screen__vertical"></div><div class="first-screen__three first-screen__vertical"></div></div></div>`;
  parent.insertAdjacentHTML("beforeend", logo);
};
export const addAnimation = () => {
  setTimeout(() => {
    document
      .querySelector(".first-screen__circle")
      .classList.add("first-screen__circle-anim");
  }, 1000);
};
export const removeFirstScreen = (parent) => {
  const firstScreen = document.querySelector(".first-screen");
  if (parent) {
    utils.removeChildren(parent, firstScreen);
  }
};
