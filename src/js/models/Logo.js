export default class Logo {
  constructor() {}
  async getLogoData() {
    try {
      const url = '/json/logo.json';
      const logoData = await fetch(url);
      this.result = await logoData.json();
    } catch (error) {}
  }
}
