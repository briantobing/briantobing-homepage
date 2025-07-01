# Contents of /photo-gallery/photo-gallery/README.md

# Photo Gallery Project

This project is a web-based photo gallery that allows users to view images in a grid layout. Users can click on an image to view it in a larger format in a popup, with zoom in/out capabilities and captions displayed underneath.

## Features

- Image gallery layout
- Clickable images that open in a popup
- Zoom in/out functionality for images
- Captions displayed for each image

## File Structure

- `src/js/gallery.js`: Initializes the gallery and sets up event listeners.
- `src/js/popup.js`: Manages the image popup functionality.
- `src/js/zoom.js`: Provides zoom in/out capabilities for images.
- `src/css/style.css`: General styles for the website.
- `src/css/gallery.css`: Styles specific to the gallery layout.
- `src/css/popup.css`: Styles for the popup overlay.
- `src/components/Gallery.js`: Renders the image gallery component.
- `src/components/ImagePopup.js`: Displays the larger image in a popup.
- `src/components/ImageCaption.js`: Displays the caption for the image.
- `src/index.html`: Main HTML file for the project.
- `tests/gallery.test.js`: Unit tests for the gallery functionality.
- `package.json`: Configuration file for npm.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage

Open `src/index.html` in a web browser to view the gallery. Click on any image to see it in a larger format with zoom capabilities.