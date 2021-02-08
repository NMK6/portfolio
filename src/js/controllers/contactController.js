import { elements } from "./../views/base";
import * as utils from "./../views/utils";
import { createViewRoot } from "../views/rootView";
import * as commonController from "./commonController";
export function renderContact() {
  utils.removeChildren(elements.root, document.querySelector(".root__home"));
  utils.removeChildren(
    elements.root,
    document.querySelector(".root__projects")
  );
  const contactState = {};
  contactState.root = createViewRoot("contact");
  commonController.addLogo(contactState, contactState.root);
}
