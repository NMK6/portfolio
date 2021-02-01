import { elements } from "./base";
export function showContent(text, title, parent) {
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

  parent.appendChild(sectionContainer);
}
export function showLisContent(e, obj) {
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
  }
  document
    .querySelector(`.article__${e.target.firstChild.nodeValue}`)
    .scrollIntoView();
}
