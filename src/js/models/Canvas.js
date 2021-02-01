export default class Canvas {
  constructor(
    width,
    height,
    styleClass,
    rectH,
    rectW,
    smallRectW,
    smallRectH,
    startY,
    startX,
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
    this.startY = startY;
    this.startX = startX;
    this.radius = radius;
    this.canvasLogo = document.createElement("canvas");
    this.canvasLogo.context = this.canvasLogo.getContext("2d");
    this.canvasLogo.width = this.width;
    this.canvasLogo.height = this.height;
    this.canvasLogo.style.width = this.width;
    this.canvasLogo.style.height = this.height;
    this.canvasLogo.className = this.styleClass;
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
    this.canvasLogo.context.beginPath();

    this.canvasLogo.context.arc(
      this.x + this.x * this.smallRectW,
      this.y + this.y * this.smallRectH,
      this.radius,
      0,
      2 * Math.PI
    );
    this.canvasLogo.context.stroke();
  }
  drawBorder() {
    this.canvasLogo.context.beginPath();
    this.canvasLogo.context.strokeStyle = "#d9b9a7";

    this.canvasLogo.context.rotate((10 * Math.PI) / 180);
    this.canvasLogo.context.lineWidth = 0.5;
    this.canvasLogo.context.strokeRect(50, 0, this.rectW, this.rectH);

    this.canvasLogo.context.stroke();
  }
}
