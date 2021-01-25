export const createMenu = (parent) => {
  const menuUl = document.createElement('ul');
  const navBar = document.createElement('nav');

  navBar.className = 'menu__container';
  parent.appendChild(navBar);
  const menuText = ['home', 'projects', 'contact'];
  menuUl.className = 'menu__ul';
  menuText.forEach((element, key) => {
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
      console.log('a');
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

// menuUl.addEventListener('click', showLisContent);

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
    // e.target.addEventListener('mouseout', removeMenuTitle);
  }
}

// function showLisContent(e) {
//   if (e.target.classList.contains('menu__li')) {
//     switch (e.target.firstChild.nodeValue) {
//       case 'home':
//         if (!document.querySelector('.article__home')) {
//           const homeArticle = document.createElement('section');
//           homeArticle.className = 'article__home';
//           main.appendChild(homeArticle);
//           showContent(
//             sectionsContent.home.text,
//             sectionsContent.home.title,
//             homeArticle
//           );
//         }

//         break;
//       case 'contact':
//         if (!document.querySelector('.article__contact')) {
//           const contactArticle = document.createElement('section');
//           contactArticle.className = 'article__contact';
//           main.appendChild(contactArticle);
//           showContent(
//             sectionsContent.contact.text,
//             sectionsContent.contact.title,
//             contactArticle
//           );
// const form = document.createElement("form");
// contactArticle.appendChild(form);
// }

//         break;
//       case 'projects':
//         if (!document.querySelector('.article__projects')) {
//           const projectsArticle = document.createElement('section');
//           projectsArticle.className = 'article__projects';
//           main.appendChild(projectsArticle);
//           showContent(
//             sectionsContent.projects.text,
//             sectionsContent.projects.title,
//             projectsArticle
//           );
//         }

//         break;
//       default:
//         main.appendChild(homeArticle);
//     }
//     const section = document.querySelector(
//       `.article__${e.target.firstChild.nodeValue}`
//     );

//     section.scrollIntoView();
//   }

export const drawMenuTitle = async (e, arr, obj) => {
  const title = e.target.firstChild.nodeValue;
  if (!arr) {
    return;
  } else {
    const dataArr = await arr[`${title}`];

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
