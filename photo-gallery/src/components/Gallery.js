import React, { useState } from 'react';
import ImagePopup from './ImagePopup';
import ImageCaption from './ImageCaption';
import './gallery.css';

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = (image) => {
        setSelectedImage(image);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setSelectedImage(null);
        setIsPopupOpen(false);
    };

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.thumbnail}
                    alt={image.caption}
                    onClick={() => openPopup(image)}
                    className="gallery-image"
                />
            ))}
            {isPopupOpen && (
                <ImagePopup image={selectedImage} onClose={closePopup}>
                    <ImageCaption caption={selectedImage.caption} />
                </ImagePopup>
            )}
        </div>
    );
};

export default Gallery;