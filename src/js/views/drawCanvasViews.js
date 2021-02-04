import * as utils from "./utils";
export const drawCanvas = (arr, obj) => {
  utils.drawCanvasFromJson(arr, obj);
  obj.parent.appendChild(obj.canvas);
};
