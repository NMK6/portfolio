export const drawCanvas = (arr, obj) => {
  for (let i = 0; i < arr.length; i++) {
    obj.y = i + obj.apartY;
    for (let l = 0; l < arr[i].length; l++) {
      obj.x = l + obj.apartX;
      if (arr[i][l] == "y") {
        obj.context.strokeStyle =
          obj.colors[Math.floor(Math.random() * obj.colors.length)];

        obj.draw();
      } else if (arr[i][l] == "n") {
        obj.context.strokeStyle = "transparent";

        obj.draw();
      }
    }
  }
  obj.parent.appendChild(obj.canvas);
};
