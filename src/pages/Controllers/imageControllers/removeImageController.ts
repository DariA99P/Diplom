const removeImageController = () => {
  const canvas = document.getElementById('canvasId');
  // @ts-ignore
  const ctx = canvas.getContext('2d');
  // @ts-ignore
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

export default removeImageController;
