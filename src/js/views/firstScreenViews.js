import { elements } from './base';
export const addFirstLogo = () => {
  const logo = `<div class="first-screen"><div class="first-screen__circle"><div class="first-screen__one first-screen__vertical"></div><div class="first-screen__two first-screen__vertical"></div><div class="first-screen__three first-screen__vertical"></div></div></div>`;
  elements.root.insertAdjacentHTML('beforeend', logo);
};
export const addAnimation = () => {
  const logoBorder = document.querySelector('.first-screen__circle');
  setTimeout(() => {
    logoBorder.classList.add('first-screen__circle-anim');
  }, 1000);
};
