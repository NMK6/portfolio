export const addVisuallyHidden = (oldClass) => {
  document.querySelector(oldClass).classList.add("visually-hidden");
};
export const removeVisuallyHidden = (oldClass) => {
  document.querySelector(oldClass).classList.remove("visually-hidden");
};

export const delay = (fun, time) => {
  setTimeout(fun, time);
};
export const addVisuallyHiddenLater = (oldClass) => {
  setTimeout(function () {
    document.querySelector(oldClass).classList.add("visually-hidden");
  }, 3000);
};
export const removeVisuallyHiddenLater = (oldClass) => {
  setTimeout(function () {
    document.querySelector(oldClass).classList.remove("visually-hidden");
  }, 3000);
};
export const addClass = (element, newClass) => {
  element.classList.add(newClass);
};
export const removeClass = (element, oldClass) => {
  element.classList.remove(oldClass);
};

export const addFonts = () => {
  const fonts = `<link rel="preload" href="./fonts/wireone-pj1z-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="./fonts/opensanslight-2yxe-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="/json/logo.json" as="fetch" crossorigin="anonymous"><link rel="preload" href="/json/menu.json" as="fetch" crossorigin="anonymous">`;
  document.head.insertAdjacentHTML("beforeend", fonts);
};
export function addClassAppend(newClass, parent, el) {
  el.className = newClass;
  parent.appendChild(el);
}
export function drawCanvasFromJson(arr, obj) {
  const arrLength = arr.length;
  const colorsLength = obj.colors.length;
  for (let i = 0; i < arrLength; i++) {
    obj.y = i + obj.apartY;
    for (let l = 0; l < arr[i].length; l++) {
      obj.x = l + obj.apartX;
      if (arr[i][l] == "y") {
        obj.context.strokeStyle =
          obj.colors[Math.floor(Math.random() * colorsLength)];
        obj.draw();
      } else if (arr[i][l] == "n") {
        obj.context.strokeStyle = "transparent";

        obj.draw();
      }
    }
  }
}
