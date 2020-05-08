export const saveImageToDBController = () => {
  const canvas = document.getElementById('canvasId');
  // @ts-ignore
  return canvas.toDataURL();
};
