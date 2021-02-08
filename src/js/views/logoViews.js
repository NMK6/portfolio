import * as utils from "./utils";
export const drawLogo = (arr, obj) => {
  utils.drawCanvasFromJson(arr, obj);
  obj.drawBorder();
  obj.parent.appendChild(obj.canvas);
};
