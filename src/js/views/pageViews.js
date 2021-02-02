// import * as utils from "./utils";
import { elements } from "./base";

export function showLisContent(e, obj, calback) {
  function showContent(text, title, parent) {
    const sectionContainer = document.createElement("div");
    sectionContainer.className = "section__container";
    const sectionTitle = document.createElement("h2");
    sectionTitle.className = "section__title";
    sectionTitle.textContent = title;
    sectionContainer.appendChild(sectionTitle);

    text.forEach((one) => {
      const paragraph = document.createElement("p");
      paragraph.className = "section__p";
      paragraph.textContent = one;
      sectionContainer.appendChild(paragraph);
    });
    setTimeout(() => {
      calback(e);
    }, 3000);

    const arrowContainer = document.createElement("div");
    arrowContainer.className = `section__arrow-container--${parent.className.slice(
      9
    )}`;
    sectionContainer.appendChild(arrowContainer);
    parent.appendChild(sectionContainer);
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
