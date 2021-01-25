export default class Menu {
  constructor() {}
  async getMenuData() {
    try {
      const url = '/json/menu.json';
      const menuData = await fetch(url);
      this.result = await menuData.json();
    } catch (error) {}
  }
}
