export const drawLogo = (arr, obj) => {
  for (let i = 0; i < arr.length; i++) {
    obj.y = i + obj.startY;
    for (let l = 0; l < arr[i].length; l++) {
      obj.x = l + obj.startX;
      if (arr[i][l] == "y") {
        obj.canvasLogo.context.strokeStyle =
          obj.colors[Math.floor(Math.random() * obj.colors.length)];

        obj.draw();
      } else if (arr[i][l] == "n") {
        obj.canvasLogo.context.strokeStyle = "transparent";

        obj.draw();
      }
    }
  }
  obj.drawBorder();
  obj.parent.appendChild(obj.canvasLogo);
};
