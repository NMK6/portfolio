import { elements } from './base';

export const createMenu = (parent, titles) => {
  const menuUl = document.createElement('ul');
  const navBar = document.createElement('nav');

  navBar.className = 'menu__container';
  parent.appendChild(navBar);

  // const menuText = titles;

  menuUl.className = 'menu__ul';
  titles.forEach((element, key) => {
    function animateLi() {
      const menuLi = document.createElement('li');
      menuLi.classList = 'menu__li';

      menuLi.textContent = element;
      menuUl.appendChild(menuLi);
    }
    setTimeout(
      animateLi,

      600 * 2 * key
    );

    clearTimeout(animateLi);
  });

  navBar.appendChild(menuUl);
};

export function removeMenuTitle(e) {
  if (
    document.querySelector(
      `.${e.target.firstChild.nodeValue}-menu-title-canvas__container`
    )
  ) {
    const menuTitleContainer = document.querySelector(
      `.${e.target.firstChild.nodeValue}-menu-title-canvas__container`
    );
    menuTitleContainer.classList.add('menu-title-canvas__remove');
    setTimeout(function () {
      while (menuTitleContainer.hasChildNodes()) {
        menuTitleContainer.removeChild(menuTitleContainer.firstChild);
      }
      if (document.querySelector('.menu-title-canvas__remove')) {
        const oldTitle = document.querySelector('.menu-title-canvas__remove');
        document.querySelector('.second-screen').removeChild(oldTitle);
      }
    }, 3000);
  } else {
    return;
  }
}

export function createMenuTitle(e, parent) {
  const menuTitleContainer = document.createElement('div');
  menuTitleContainer.className = `${e.target.firstChild.nodeValue}-menu-title-canvas__container`;
  parent.appendChild(menuTitleContainer);
}
export function showMenuTitle(e) {
  if (
    !document.querySelector(
      `.${e.target.firstChild.nodeValue}-menu-title-canvas__container`
    )
  ) {
    createMenuTitle(e);
  }
}

export function showContent(text, title, parent) {
  const sectionContainer = document.createElement('div');
  sectionContainer.className = 'section__container';
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section__title';
  sectionTitle.textContent = title;
  sectionContainer.appendChild(sectionTitle);

  text.forEach((one) => {
    const paragraph = document.createElement('p');
    paragraph.className = 'section__p';
    paragraph.textContent = one;
    sectionContainer.appendChild(paragraph);
  });

  parent.appendChild(sectionContainer);
}
const sectionsContent = {
  home: {
    title: 'Front end developer',
    text: ['I am a front end developer.'],
  },
  contact: {
    title: 'Contact me',
    text: [''],
  },
  projects: {
    title: 'My projects',
    text: [''],
  },
};
export function showLisContent(e) {
  switch (e.target.firstChild.nodeValue) {
    case 'home':
      if (!document.querySelector('.article__home')) {
        const homeArticle = document.createElement('section');
        homeArticle.className = 'article__home';
        elements.root.appendChild(homeArticle);
        showContent(
          sectionsContent.home.text,
          sectionsContent.home.title,
          homeArticle
        );
      }

      break;
    case 'contact':
      if (!document.querySelector('.article__contact')) {
        const contactArticle = document.createElement('section');
        contactArticle.className = 'article__contact';
        elements.root.appendChild(contactArticle);
        showContent(
          sectionsContent.contact.text,
          sectionsContent.contact.title,
          contactArticle
        );
        const form = document.createElement('form');
        contactArticle.appendChild(form);
      }

      break;
    case 'projects':
      if (!document.querySelector('.article__projects')) {
        const projectsArticle = document.createElement('section');
        projectsArticle.className = 'article__projects';
        elements.root.appendChild(projectsArticle);
        showContent(
          sectionsContent.projects.text,
          sectionsContent.projects.title,
          projectsArticle
        );
      }

      break;
    default:
      elements.root.appendChild(homeArticle);
  }
  const section = document.querySelector(
    `.article__${e.target.firstChild.nodeValue}`
  );

  section.scrollIntoView();
}

export const drawMenuTitle = (e, arr, obj) => {
  const title = e.target.firstChild.nodeValue;
  if (!arr) {
    return;
  } else {
    const dataArr = arr[`${title}`];

    for (let i = 0; i < dataArr.length; i++) {
      obj.y = i + obj.startY;
      for (let l = 0; l < dataArr[i].length; l++) {
        obj.x = l + obj.startX;
        if (dataArr[i][l] == 'y') {
          obj.canvasLogo.context.strokeStyle =
            obj.colors[Math.floor(Math.random() * obj.colors.length)];

          obj.draw();
        } else if (dataArr[i][l] == 'n') {
          obj.canvasLogo.context.strokeStyle = 'transparent';

          obj.draw();
        }
      }
    }

    obj.parent.appendChild(obj.canvasLogo);
  }
};