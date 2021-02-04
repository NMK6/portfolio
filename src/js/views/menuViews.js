import * as utils from "./utils";
export const createMenu = (parent, titles, ...args) => {
  const menuUl = document.createElement("ul");
  const navBar = document.createElement("nav");
  utils.addClassAppend("menu__container", parent, navBar);
  menuUl.addEventListener("mouseover", ...args);
  menuUl.className = "menu__ul";
  titles.forEach((element, key) => {
    function animateLi() {
      const menuLi = document.createElement("li");
      menuLi.textContent = element;
      utils.addClassAppend("menu__li", menuUl, menuLi);
    }
    setTimeout(
      animateLi,

      600 * 2 * key
    );

    clearTimeout(animateLi);
  });

  navBar.appendChild(menuUl);

  const menuTitleContainer = document.createElement("div");
  utils.addClassAppend(
    "menu-title-canvas__container",
    parent,
    menuTitleContainer
  );
};

export function removeMenuTitle(obj) {
  const canvasContainer = document.querySelector(
    ".menu-title-canvas__container"
  );
  utils.removeClass(canvasContainer, "menu-title-canvas__anim");
  utils.addClass(canvasContainer, "menu-title-canvas__remove");

  obj.context.clearRect(0, 0, obj.canvas.width, obj.canvas.height);
}

export const drawMenuTitle = (e, arrJ, obj) => {
  const title = e.target.firstChild.nodeValue;
  const canvasContainer = document.querySelector(
    ".menu-title-canvas__container"
  );
  if (!arrJ) {
    return;
  } else {
    if (canvasContainer.classList.contains("menu-title-canvas__remove")) {
      utils.removeClass(canvasContainer, "menu-title-canvas__remove");
    }
    const arr = arrJ[`${title}`];
    //  const dataArrLength = dataArr.length;

    // for (let i = 0; i < dataArrLength; i++) {
    //   obj.y = i + obj.apartY;
    //   for (let l = 0; l < dataArr[i].length; l++) {
    //     obj.x = l + obj.apartX;
    //     if (dataArr[i][l] == "y") {
    //       obj.context.strokeStyle =
    //         obj.colors[Math.floor(Math.random() * obj.colors.length)];

    //       obj.draw();
    //     } else if (dataArr[i][l] == "n") {
    //       obj.context.strokeStyle = "transparent";

    //       obj.draw();
    //     }
    //   }
    // }
    utils.drawCanvasFromJson(arr, obj);
    utils.addClass(canvasContainer, "menu-title-canvas__anim");
    if (!document.querySelector(".menu-title-canvas")) {
      obj.parent.appendChild(obj.canvas);
    }
  }
};
