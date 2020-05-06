function handleFiles() {
  if (!this.files.length) {
  } else {
    for (let i = 0; i < this.files.length; i++) {
      const canvas = document.getElementById('canvasId');
      // @ts-ignore
      const ctx = canvas.getContext('2d');
      const img = document.createElement('img');
      img.src = URL.createObjectURL(this.files[i]);
      img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // URL.revokeObjectURL(this.src);
      };
    }
  }
}

export const downloadImageController = () => {
  const inputElement = document.getElementById('inputID');
  if (inputElement) {
    inputElement.click();
  }
  inputElement.addEventListener('change', handleFiles, false);
};
