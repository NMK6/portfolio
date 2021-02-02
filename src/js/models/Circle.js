export default class Circle {
  constructor(apartX, apartY, radius, parent, className, x, y) {
    this.apartX = apartX;
    this.apartY = apartY;
    this.radius = radius;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = parent.clientWidth;
    this.canvas.height = parent.clientHeight;
    this.canvas.style.width = parent.clientWidth;
    this.canvas.style.height = parent.clientHeight;
    this.canvas.className = className;
    this.colors = [
      "#57292c",
      "#3d1e20",
      "#57282b",
      "#3d1a1c",
      "#421719",
      "#5a2a2d",
      "#532528",
    ];
    this.parent = parent;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.context.beginPath();

    this.context.arc(
      this.x + this.x * this.apartX,
      this.y + this.y * this.apartY,
      this.radius,
      0,
      2 * Math.PI
    );

    this.context.stroke();
  }
}
