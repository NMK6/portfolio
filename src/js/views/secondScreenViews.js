import { elements } from './base';
export const addSecondScreen = () => {
  const secondScreen = document.createElement('div');
  secondScreen.className = 'second-screen visually-hidden';
  elements.root.appendChild(secondScreen);
};
