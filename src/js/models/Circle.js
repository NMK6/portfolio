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
    this.colors = ["#fdecec", "   #fcf3f3", "#f8e7e7", "#f5c6c6", "#f1cbcb"];
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
