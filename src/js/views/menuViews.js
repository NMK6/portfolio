export const createMenu = (parent, titles) => {
  const menuUl = document.createElement("ul");
  const navBar = document.createElement("nav");

  navBar.className = "menu__container";
  parent.appendChild(navBar);

  menuUl.className = "menu__ul";
  titles.forEach((element, key) => {
    function animateLi() {
      const menuLi = document.createElement("li");
      menuLi.classList = "menu__li";

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
    menuTitleContainer.classList.add("menu-title-canvas__remove");
    setTimeout(function () {
      while (menuTitleContainer.hasChildNodes()) {
        menuTitleContainer.removeChild(menuTitleContainer.firstChild);
      }
      if (document.querySelector(".menu-title-canvas__remove")) {
        const oldTitle = document.querySelector(".menu-title-canvas__remove");
        document.querySelector(".second-screen").removeChild(oldTitle);
      }
    }, 3000);
  } else {
    return;
  }
}

export function createMenuTitle(e, parent) {
  const menuTitleContainer = document.createElement("div");
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

export const drawMenuTitle = (e, arr, obj) => {
  const title = e.target.firstChild.nodeValue;
  if (!arr || obj.parent.contains(obj.canvasLogo)) {
    return;
  } else {
    const dataArr = arr[`${title}`];

    for (let i = 0; i < dataArr.length; i++) {
      obj.y = i + obj.startY;
      for (let l = 0; l < dataArr[i].length; l++) {
        obj.x = l + obj.startX;
        if (dataArr[i][l] == "y") {
          obj.canvasLogo.context.strokeStyle =
            obj.colors[Math.floor(Math.random() * obj.colors.length)];

          obj.draw();
        } else if (dataArr[i][l] == "n") {
          obj.canvasLogo.context.strokeStyle = "transparent";

          obj.draw();
        }
      }
    }

    obj.parent.appendChild(obj.canvasLogo);
  }
};
