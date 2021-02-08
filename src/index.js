import "./sass/main.scss";
import { renderHome } from "./js/controllers/homeController";
import { renderContact } from "./js/controllers/contactController";
import { renderProjects } from "./js/controllers/projectsController";
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/dist",
      view: renderHome,
    },
    {
      path: "/dist/projects",
      view: renderProjects,
    },
    { path: "/dist/contact", view: renderContact },
  ];
  const matchesActive = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });
  let findMatch = matchesActive.find((match) => match.isMatch);
  if (!findMatch) {
    findMatch = {
      route: routes[0],
      isMatch: true,
    };
  }
  findMatch.route.view();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();

  addEventListener("keydown", function (e) {
    if (e.code == 116 || e.code == 82) {
      e.preventDefault();
      router();
    }
  });
});
