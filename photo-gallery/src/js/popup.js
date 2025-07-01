const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closeButton = document.getElementById('close-popup');

function openPopup(imageSrc) {
    popupImage.src = imageSrc;
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

closeButton.addEventListener('click', closePopup);

export { openPopup, closePopup };