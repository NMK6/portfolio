import * as utils from "./../views/utils";
import { elements } from "./../views/base";
import { createViewRoot } from "./../views/rootView";
import * as commonController from "./commonController";

export function renderProjects() {
  utils.removeChildren(elements.root, document.querySelector(".root__home"));
  utils.removeChildren(elements.root, document.querySelector(".root__contact"));
  const projectsState = {};
  projectsState.root = createViewRoot("projects");
  commonController.addLogo(projectsState, projectsState.root);
}
