const slideshow = document.getElementById('slideshow');
const image = document.getElementById('image');
const prevButton = document.getElementById('prevButton');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const nextButton = document.getElementById('nextButton');
const fullscreenButton = document.getElementById('fullscreenButton');

const imageFolder = 'pictures/';
let currentImageIndex = 1;
let isPlaying = false;
let interval;

function loadImage(index) {
  image.src = `${imageFolder}image${index}.png`;
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex > numImages) {
    currentImageIndex = 1;
  }
  loadImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) {
    currentImageIndex = numImages;
  }
  loadImage(currentImageIndex);
}

function togglePlay() {
  if (isPlaying) {
    clearInterval(interval);
    isPlaying = false;
  } else {
    interval = setInterval(nextImage, 2000); // Change image every 2 seconds (adjust as needed)
    isPlaying = true;
  }
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    slideshow.requestFullscreen();
  }
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    slideshow.requestFullscreen();
  }
}

fullscreenButton.addEventListener('click', toggleFullscreen);

// Écouter le changement d'état du mode plein écran
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement === slideshow) {
    // Le diaporama est en mode plein écran, ajoutez la classe pour masquer d'autres éléments
    document.body.classList.add('hide-in-fullscreen');
  } else {
    // Le mode plein écran a été quitté, retirez la classe pour réafficher les éléments
    document.body.classList.remove('hide-in-fullscreen');
  }
});


playButton.addEventListener('click', togglePlay);
pauseButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);
fullscreenButton.addEventListener('click', toggleFullscreen);

const numImages = 5; // Change this to the number of images in your folder
loadImage(currentImageIndex);
