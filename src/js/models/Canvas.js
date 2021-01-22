import { threadId } from 'worker_threads';

export class Canvas {
  constructor(
    arr,
    width,
    height,
    styleClass,
    parent,
    rectW,
    rectH,
    smallRectW,
    smallRectH,
    startY,
    startX,
    radius
  ) {
    this.arr = arr;
    this.width = width;
    this.height = height;
    this.styleClass = styleClass;
    this.parent = parent;
    this.rectW = rectW;
    this.rectH = rectH;
    this.smallRectW = smallRectW;
    this.smallRectH = smallRectH;
    this.startY = startY;
    this.startX = startX;
    this.radius = radius;
    this.canvasLogo = document.createElement('canvas');
    this.context = canvasLogo.getContext('2d');
    this.canvasLogo.width = width;
    this.canvasLogo.height = height;
    this.canvasLogo.style.width = width;
    this.canvasLogo.style.height = height;
    this.canvasLogo.className = styleClass;
    this.colors = [
      '#D9B9A7',
      '#FADDCD',
      '#FAD5C0',
      '#FACEB4',
      '#E6B89E',
      '#E0C0AD',
    ];
  }
  appendCanvas() {
    this.parent.appendChild(this.canvasLogo);
  }
}
