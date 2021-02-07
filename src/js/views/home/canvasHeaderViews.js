import { elements } from "../base";
export function createCanvas() {
  const canvasThirdScreen = document.createElement("canvas");
  const context = canvasThirdScreen.getContext("2d");
  canvasThirdScreen.width = innerWidth;
  canvasThirdScreen.height = innerHeight;
  canvasThirdScreen.style.width = innerWidth;
  canvasThirdScreen.style.height = innerHeight;
  canvasThirdScreen.classList = "third-screen__canvas";
  elements.root.appendChild(canvasThirdScreen);
  class Line {
    constructor(x, y, color, lineHeight) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.dx = (Math.random() - 0.5) * 2;
      this.lineHeight = lineHeight;
    }
    draw() {
      context.beginPath();
      context.moveTo(this.x, this.y);
      context.lineTo(this.x, this.lineHeight);

      context.strokeStyle = this.color;
      context.lineWidth = 1;
      this.lineHeight += this.dx;
      context.stroke();
    }
    update() {
      this.draw();
    }
  }
  const linesLength = innerWidth;
  const lines = [];
  function init() {
    for (let i = 0; i < linesLength; i++) {
      const colors = [
        "#73221A",
        "#262214",
        "#403925",
        "#BF6956",
        "#D9B9A7",
        "#AD3328",
        "#A12F25",

        "#611D16",
      ];
      let x = Math.floor(Math.random() * linesLength);
      let y = 0;
      let lineHeight = (Math.random() - 0.5) * 2;
      let color = colors[Math.floor(Math.random() * colors.length)];

      lines.push(new Line(x, y, color, lineHeight));
    }
  }
  function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvasThirdScreen.width, canvasThirdScreen.height);

    lines.forEach((line) => {
      line.update(lines);
    });
    lines.forEach((line) => {
      let newHeight = Math.random() * innerHeight * 6;
      if (line.lineHeight >= newHeight) {
        line.lineHeight =
          line.lineHeight - line.lineHeight / (Math.random() * 95);
      }
    });
  }

  init();
  animate();
}
