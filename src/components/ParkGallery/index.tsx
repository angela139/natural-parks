'use client';

import ImageGallery from '@/components/ImageGallery';
import ImageCarousel from '@/components/ImageCarousel';
import ParkInfo from '@/components/ParkInfo';
import styles from './style.module.scss';

const ParkGallery = () => {
  const images = ['/assets/park1.png', '/assets/park2.png', '/assets/park3.png'];
  return (
    <div className={styles.container}>
      <div className={styles.blurbSection}>
        <h2>
          From towering mountains to vast deserts, national parks across the U.S. showcase the
          breathtaking beauty and diversity of the natural world.
        </h2>
        <p>
          Spanning over 400 sites, these protected areas preserve scenic landscapes, rich wildlife
          habitats, and deep cultural histories. Whether hiking through ancient forests, exploring
          desert canyons, or witnessing geysers erupt in Yellowstone, national parks offer
          unforgettable experiences that inspire wonder and conservation for generations to come.
        </p>
      </div>
      <div className={styles.mobileCarousel}>
        <ImageCarousel images={images} />
      </div>
      <div className={styles.desktopGallery}>
        <ImageGallery images={images} />
      </div>
      <ParkInfo />
    </div>
  );
};

export default ParkGallery;
