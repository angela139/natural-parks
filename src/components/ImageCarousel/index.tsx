'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.track} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              sizes={'1000px'}
              fill
              className={styles.img}
            />
          </div>
        ))}
      </div>

      <button className={styles.left} onClick={prev} aria-label="Previous">
        <ChevronLeft />
      </button>
      <button className={styles.right} onClick={next} aria-label="Next">
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
