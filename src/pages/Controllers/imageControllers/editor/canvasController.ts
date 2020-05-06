import removeImageController from '../removeImageController';

const CanvasModule = (() => {
  const canvasModule = {
    getCanvas: () => null,
  };
  const _drawGrid = (ctx, width, height, pixel) => {
    const xStep = width / pixel;
    const yStep = height / pixel;
    for (let x = 0.5; x < width; x += xStep) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    for (let y = 0.5; y < height; y += yStep) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    ctx.strokeStyle = 'grey';
    ctx.stroke();
  };
  canvasModule.getCanvas = () => {
    const canvas = document.getElementById('canvasId');
    // @ts-ignore
    const ctx = canvas.getContext('2d');
    // @ts-ignore
    const width = canvas.width;
    // @ts-ignore
    const height = canvas.height;
    const pixel = 20;
    let isMouseDown = false;

    canvas.addEventListener('mousedown', e => {
      isMouseDown = true;
      ctx.beginPath();
      ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    });

    canvas.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    canvas.addEventListener('mouseout', () => {
      isMouseDown = false;
    });

    canvas.addEventListener('mousemove', e => {
      if (isMouseDown) {
        ctx.fillStyle = 'black';
        ctx.string = 'black';
        ctx.lineWidth = 20;
        const x = e.pageX - canvas.offsetLeft;
        const y = e.pageY - canvas.offsetTop;
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });
    _drawGrid(ctx, width, height, pixel);
    removeImageController();
  };
  return canvasModule;
})();

export default CanvasModule;
