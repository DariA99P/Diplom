// @ts-ignore
const magicButtonController = () => {
  const canvas = document.getElementById('canvasId');
  // @ts-ignore
  const ctx = canvas.getContext('2d');
  // @ts-ignore
  const width = canvas.width;
  // @ts-ignore
  const height = canvas.height;
  const pixel = 20;
  const xStep = width / pixel;
  const yStep = height / pixel;
  const vector = [];
  const _draw = [];
  let countRow = 0;
  for (let x = 0; x < width; x += xStep) {
    let countColumn = 0;
    for (let y = 0; y < height; y += yStep) {
      const data = ctx.getImageData(x, y, xStep, yStep);
      let nonEmptyPixelsCount = 0;
      for (let i = 0; i < data.data.length; i += 10) {
        const isEmpty = data.data[i] === 0;

        if (!isEmpty) {
          nonEmptyPixelsCount += 1;
        }
      }
      if (nonEmptyPixelsCount > 1 && _draw) {
        _draw.push([x, y, xStep, yStep]);
      }
      vector.push(nonEmptyPixelsCount > 10 ? 1 : 0);
      countColumn += 1;
    }
    countRow += 1;
  }
  return vector;
};
export default magicButtonController;

// if (draw) {
//   clearCanvas();
//   drawGrid(ctx, width, height, pixel);
//
//   for (const _d in _draw) {
//     drawCell(ctx, _draw[_d][0], _draw[_d][1], _draw[_d][2], _draw[_d][3]);
//   }
// }
// Создаем объект изображения
// var img = new Image();
//
// img.src = Circle;
//
// ctx.drawImage(img, 0, 0, width, height - 100);