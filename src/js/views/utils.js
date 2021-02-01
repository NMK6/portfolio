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
export const addFonts = () => {
  const fonts = `<link rel="preload" href="./fonts/wireone-pj1z-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="./fonts/opensanslight-2yxe-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous">`;
  document.head.insertAdjacentHTML("beforeend", fonts);
};
