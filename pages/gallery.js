import { Container, Heading, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import styles from '../styles/gallery.module.css'

const images = [
  {
    src: '/photo-gallery/eye.jpg',
    alt: 'Eye',
    caption: 'Eye',
    width: 800,
    height: 600
  },
  {
    src: '/photo-gallery/queens-gambit.jpg',
    alt: 'Queens Gambit',
    caption: "The Queen's Gambit",
    width: 600,
    height: 800
  },
  {
    src: '/photo-gallery/mountain.jpg',
    alt: 'Mountain',
    caption: 'Snow Mountain',
    width: 800,
    height: 500
  },
  {
    src: '/photo-gallery/owl.jpg',
    alt: 'Owl',
    caption: 'Owl',
    width: 600,
    height: 800
  },
  {
    src: '/photo-gallery/peaky-blinders.jpg',
    alt: 'Peaky Blinders',
    caption: 'Peaky Blinders',
    width: 800,
    height: 600
  },
  {
    src: '/photo-gallery/violin.jpg',
    alt: 'Violin',
    caption: 'Violin',
    width: 600,
    height: 800
  },
  {
    src: '/photo-gallery/skull.jpg',
    alt: 'Skull',
    caption: 'Happy Halloween',
    width: 800,
    height: 600
  }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClosing, setIsClosing] = useState(false)
  const [inputValue, setInputValue] = useState(100) // Add this new state

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      setSelectedImage(null)
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }, 400) // Changed from 300ms to 400ms to match new animation duration
  }

  const handleZoomIn = (e) => {
    e.stopPropagation()
    setScale(prev => Math.min(prev + 0.25, 5)) // Increment by 25%
  }

  const handleZoomOut = (e) => {
    e.stopPropagation()
    setScale(prev => Math.max(prev - 0.25, 1)) // Decrement by 25%
  }

  const handleMouseMove = (e) => {
    if (scale > 1) {
      const container = e.currentTarget
      //const image = container.querySelector('img')
      const rect = container.getBoundingClientRect()
      
      const x = (e.clientX - rect.left) / container.offsetWidth
      const y = (e.clientY - rect.top) / container.offsetHeight
      
      const moveX = (container.offsetWidth * (scale - 1)) * (0.5 - x)
      const moveY = (container.offsetHeight * (scale - 1)) * (0.5 - y)
      
      setPosition({ x: moveX, y: moveY })
    }
  }

  const handleDoubleClick = (e) => {
    e.stopPropagation()
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleClick = (e) => {
    e.stopPropagation()
    if (scale < 5) { // Max zoom 5x
      setScale(scale + 0.25) // Increment by 25%
    } else {
      setScale(1) // Reset to original size if at max zoom
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleZoomInputChange = (e) => {
    e.stopPropagation()
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    setInputValue(newValue) // Update the input value state
  }

  const handleZoomInputKeyDown = (e) => {
    e.stopPropagation()
    if (e.key === 'Enter') {
      const value = parseFloat(inputValue)
      if (!isNaN(value)) {
        const newScale = Math.min(Math.max(value / 100, 1), 5) // Limit between 100% and 500%
        setScale(newScale)
      }
      e.target.blur() // Remove focus from input after Enter
    }
  }

  // Update inputValue when scale changes from other controls
  useEffect(() => {
    setInputValue(Math.round(scale * 100))
  }, [scale])

  const handleOverlayClick = (e) => {
    // Close if clicking on the modalOverlay class element
    if (e.target.className.includes(styles.modalOverlay)) {
      handleClose()
    }
  }

  // Add useEffect for keyboard listener
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleEscKey)
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  }, [selectedImage]) // Only re-run if selectedImage changes

  return (
    <Layout title="Gallery">
      <Container maxW="100%" px={[4, 6, 8]}>
        <Heading as="h3" fontSize={20} mb={4}>
          Art Gallery
        </Heading>
        
        <Section delay={0.1}>
          <Box className={styles.masonryGrid}>
            {images.map((image, index) => (
              <Box 
                key={index}
                className={styles.masonryItem}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                />
              </Box>
            ))}
          </Box>
        </Section>

        {selectedImage && (
          <Box
            className={`${styles.modalOverlay} ${isClosing ? styles.closing : ''}`}
            onClick={handleOverlayClick}
          >
            <Box 
              className={`${styles.controls} ${isClosing ? styles.closing : ''}`}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.galleryButton} onClick={handleZoomOut}>
                −
              </button>
              <input
                type="number"
                value={inputValue}
                onChange={handleZoomInputChange}
                onKeyDown={handleZoomInputKeyDown}
                className={styles.zoomInput}
                min="100"
                max="500"
                step="25"
                onClick={e => e.stopPropagation()}
              />
              <span style={{ color: 'white', opacity: 0.8 }}>%</span>
              <button className={styles.galleryButton} onClick={handleZoomIn}>
                +
              </button>
              <button className={styles.galleryButton} onClick={handleClose}>
                ✕
              </button>
            </Box>
            <Box
              className={`${styles.modalContent} ${isClosing ? styles.closing : ''}`}
              onClick={e => e.stopPropagation()}
              onMouseMove={handleMouseMove}
              onDoubleClick={handleDoubleClick}
              onClickCapture={handleClick}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  transition: 'transform 0.3s ease',
                  cursor: scale > 1 ? 'move' : 'zoom-in'
                }}
              />
              <Box 
                className={styles.imageCaption}
                style={{ 
                  opacity: isClosing ? 0 : scale === 1 ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                {selectedImage.caption}
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default Gallery
export { getServerSideProps } from '../components/chakra'