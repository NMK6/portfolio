// import Search from './js/models/Logo';
// import { elements } from './js/views/base';
import style from './sass/main.scss';
import * as firstScreenViews from './js/views/firstScreenViews';
import cooking from './img/cooking__first-screen.png';
firstScreenViews.addFirstLogo();
window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  firstScreenViews.addAnimation();
});
