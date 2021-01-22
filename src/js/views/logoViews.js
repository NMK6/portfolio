function createLogo() {
  const url = 'logo.json';

  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      createCanvasOneLine(
        data.logo,
        150,
        100,
        'canvas__logo',
        main,
        70,
        70,
        1.1,
        1.1,
        18,
        24,
        0.3
      );
    })
    .catch(function () {});
}
