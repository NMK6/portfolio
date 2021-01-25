export const createMenu = (parent) => {
  const menuUl = document.createElement('ul');
  const navBar = document.createElement('nav');

  navBar.className = 'menu__container';
  parent.appendChild(navBar);
  const menuText = ['home', 'projects', 'contact'];
  menuUl.className = 'menu__ul';
  menuText.forEach((element, key) => {
    function animateLi() {
      const menuLi = document.createElement('li');
      menuLi.classList = 'menu__li';

      menuLi.textContent = element;
      menuUl.appendChild(menuLi);
    }
    setTimeout(
      animateLi,

      600 * 2 * key
    );

    clearTimeout(animateLi);
  });

  navBar.appendChild(menuUl);
};
