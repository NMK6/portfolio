export default class Logo {
  constructor() {
    // this.logoFile = logoFile;
  }
  async getLogoData() {
    try {
      const url = '/json/logo.json';
      const logoData = await fetch(url);
      this.result = await logoData.json();
      console.log(this.result);
    } catch (error) {}
  }
}

// createCanvasOneLine(
//   data.logo,
//   150,
//   100,
//   "canvas__logo",
//   main,
//   70,
//   70,
//   1.1,
//   1.1,
//   18,
//   24,
//   0.3
// );
