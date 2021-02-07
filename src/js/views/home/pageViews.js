import { elements } from "../base";
import * as utils from "../utils";

export function showLisContent(e, obj, calback) {
  function showContent(text, title, parent) {
    const sectionContainer = document.createElement("div");
    utils.addClassAppend("section__container", parent, sectionContainer);
    const sectionLink = document.createElement("a");
    //REMOVE DIST
    sectionLink.href = `/dist/${title}/`;
    sectionLink.dataset.link = `${title}`;
    utils.addClassAppend("section__link", sectionContainer, sectionLink);
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    utils.addClassAppend("section__title", sectionLink, sectionTitle);

    text.forEach((one) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = one;
      utils.addClassAppend("section__p", sectionContainer, paragraph);
    });
    setTimeout(() => {
      calback(e);
    }, 3000);

    const arrowContainer = document.createElement("div");
    arrowContainer.className = `section__arrow-container--${parent.className.slice(
      9
    )}`;
    sectionContainer.appendChild(arrowContainer);

    arrowContainer.addEventListener("click", function (e) {
      e.preventDefault();
      elements.root.scrollIntoView();
    });
  }
  if (!document.querySelector(`.article__${e.target.firstChild.nodeValue}`)) {
    const articleSection = document.createElement("section");
    articleSection.className = `article__${e.target.firstChild.nodeValue}`;
    elements.root.appendChild(articleSection);
    showContent(
      obj[`${e.target.firstChild.nodeValue}`].text,
      obj[`${e.target.firstChild.nodeValue}`].title,
      articleSection,
      obj[`${e.target.firstChild.nodeValue}`].image
    );
  } else {
    document
      .querySelector(`.article__${e.target.firstChild.nodeValue}`)
      .scrollIntoView();
  }
}
