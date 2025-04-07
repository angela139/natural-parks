'use client';

import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import styles from './style.module.scss';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: false, margin: '0px 0px -100px 0px' });
  const baseOffset = [0, 80, 160];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className={styles.container} ref={galleryRef}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={styles.imageWrapper}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: baseOffset[index] } : { opacity: 0, y: 100 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              mass: 1.1,
              delay: index * 0.2,
            }}
            onClick={() => setSelectedImage(src)}
          >
            <Image src={src} alt={`Park image ${index + 1}`} fill />
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalImageWrapper}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <CloseIcon />
              </button>
              <Image
                src={selectedImage}
                alt="Expanded park image"
                fill
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
