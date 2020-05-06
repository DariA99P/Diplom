const saveImageToDeviceController = () => {
  const canvas = document.getElementById('canvasId');
  // @ts-ignore
  const data = canvas.toDataURL();
  if (window.navigator.msSaveBlob) {
    // @ts-ignore
    window.navigator.msSaveBlob(canvas.msToBlob(), 'canvas-image.png');
    return data;
  } else {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = data;
    a.download = 'canvas-image.png';
    a.click();
    document.body.removeChild(a);
    return data;
  }
};

export default saveImageToDeviceController;
