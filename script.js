const imageInput = document.getElementById('imageInput');
const previewImage = document.getElementById('previewImage');
const imageCard = document.getElementById('imageCard');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const downloadJPG = document.getElementById('downloadJPG');

let scale = 1;

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    previewImage.src = imageURL;
    scale = 1;
    previewImage.style.transform = `scale(${scale})`;
    imageCard.style.display = 'flex';
  }
});

zoomIn.addEventListener('click', () => {
  scale += 0.1;
  previewImage.style.transform = `scale(${scale})`;
});

zoomOut.addEventListener('click', () => {
  if (scale > 0.2) {
    scale -= 0.1;
    previewImage.style.transform = `scale(${scale})`;
  }
});

downloadJPG.addEventListener('click', async () => {
  const card = document.getElementById('cardToCapture');

  const canvas = await html2canvas(card);
  const image = canvas.toDataURL("image/jpeg", 0.9); // JPG com 90% qualidade

  const link = document.createElement('a');
  link.href = image;
  link.download = 'captura-do-card.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
