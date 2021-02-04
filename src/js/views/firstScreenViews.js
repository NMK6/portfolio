import { elements } from "./base";
export const addFirstLogo = () => {
  const logo = `<div class="first-screen"><div class="first-screen__circle"><div class="first-screen__one first-screen__vertical"></div><div class="first-screen__two first-screen__vertical"></div><div class="first-screen__three first-screen__vertical"></div></div></div>`;
  elements.root.insertAdjacentHTML("beforeend", logo);
};
export const addAnimation = () => {
  setTimeout(() => {
    document
      .querySelector(".first-screen__circle")
      .classList.add("first-screen__circle-anim");
  }, 1000);
};
export const removeFirstScreen = () => {
  const firstScreen = document.querySelector(".first-screen");
  while (firstScreen.firstChild) {
    firstScreen.removeChild(firstScreen.firstChild);
  }
  elements.root.removeChild(firstScreen);
};
