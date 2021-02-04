export default class Canvas {
  constructor(
    width,
    height,
    styleClass,
    rectH,
    rectW,
    smallRectW,
    smallRectH,
    apartY,
    apartX,
    radius,
    parent,
    x,
    y
  ) {
    this.width = width;
    this.height = height;
    this.styleClass = styleClass;
    this.rectH = rectH;
    this.rectW = rectW;
    this.smallRectW = smallRectW;
    this.smallRectH = smallRectH;
    this.apartY = apartY;
    this.apartX = apartX;
    this.radius = radius;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = this.width;
    this.canvas.style.height = this.height;
    this.canvas.className = this.styleClass;
    this.colors = [
      "#D9B9A7",
      "#FADDCD",
      "#FAD5C0",
      "#FACEB4",
      "#E6B89E",
      "#E0C0AD",
    ];
    this.parent = parent;
    this.x = x;
    this.y = y;
  }

  draw() {
    this.context.beginPath();

    this.context.arc(
      this.x + this.x * this.smallRectW,
      this.y + this.y * this.smallRectH,
      this.radius,
      0,
      2 * Math.PI
    );
    this.context.stroke();
  }
  drawBorder() {
    this.context.beginPath();
    this.context.strokeStyle = "#d9b9a7";

    this.context.rotate((10 * Math.PI) / 180);
    this.context.lineWidth = 0.5;
    this.context.strokeRect(50, 0, this.rectW, this.rectH);

    this.context.stroke();
  }
}
