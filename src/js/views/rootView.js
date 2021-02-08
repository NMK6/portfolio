import { elements } from "./base";
import * as utils from "./utils";
export const createViewRoot = (title) => {
  const viewRoot = document.createElement("div");
  utils.addClassAppend(`root__${title}`, elements.root, viewRoot);
  return viewRoot;
};
