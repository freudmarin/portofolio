import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

type GalleryModalProps = {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const GalleryModal: React.FC<GalleryModalProps> = ({ images, title, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close only if clicking directly on overlay, not on modal content
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  if (typeof window === 'undefined') return null;

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="gallery-modal"
          className="gallery-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery for ${title}`}
        >
          <motion.div
            className="gallery-modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Close Button */}
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close gallery"
              title="Close (ESC)"
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="modal-image-container">
              <img
                src={images[currentIndex]}
                alt={`${title} - Screenshot ${currentIndex + 1}`}
                loading="lazy"
              />
            </div>

            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                {/* Left Arrow */}
                <button
                  className="modal-nav modal-nav-prev"
                  onClick={goToPrevious}
                  aria-label="Previous screenshot (← arrow key)"
                  title="Previous (← arrow)"
                >
                  ‹
                </button>

                {/* Right Arrow */}
                <button
                  className="modal-nav modal-nav-next"
                  onClick={goToNext}
                  aria-label="Next screenshot (→ arrow key)"
                  title="Next (→ arrow)"
                >
                  ›
                </button>

                {/* Dot Indicators */}
                <div className="modal-dots">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`modal-dot ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to screenshot ${idx + 1}`}
                      aria-current={idx === currentIndex ? 'page' : undefined}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="modal-counter">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default GalleryModal;
