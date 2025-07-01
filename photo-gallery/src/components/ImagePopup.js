import React, { useState } from 'react';
import './popup.css';

const ImagePopup = ({ image, caption, onClose }) => {
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => {
        setZoomLevel(prevZoom => prevZoom + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 1));
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>X</button>
                <img 
                    src={image} 
                    alt={caption} 
                    style={{ transform: `scale(${zoomLevel})` }} 
                />
                <div className="zoom-controls">
                    <button onClick={handleZoomIn}>Zoom In</button>
                    <button onClick={handleZoomOut}>Zoom Out</button>
                </div>
                <p className="image-caption">{caption}</p>
            </div>
        </div>
    );
};

export default ImagePopup;