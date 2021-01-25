import { elements } from './base';
export const addSecondScreen = () => {
  const secondScreen = document.createElement('div');
  secondScreen.className = 'second-screen visually-hidden';
  elements.root.appendChild(secondScreen);
};
export const createTitle = (parent) => {
  const title = document.createElement('h1');
  title.className = 'second-screen__title';
  parent.appendChild(title);
  const titleText = 'Front end developer';
  const titleTextArr = titleText.split('');
  function showTitle() {
    if (titleTextArr.length > 0) {
      const spanLetter = document.createElement('span');

      spanLetter.textContent = titleTextArr.shift();
      if (spanLetter.textContent != ' ') {
        spanLetter.classList.add('second-screen__letter');
      } else {
        spanLetter.classList.add('second-screen__space');
      }
      title.appendChild(spanLetter);
      setTimeout(function () {
        showTitle();
      }, 150);
    } else {
      return;
    }
  }
  showTitle();
};
// export const moveTitle = (title) => {
//   title.classList.add('title_move-right');
// };
