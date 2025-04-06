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
          Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare
          purus nulla in ipsum ac augue vitae turpis.
        </h2>
        <p>
          Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, sit amet tincidunt enim
          sollicitudin ut. Vestibulum at elementum leo. Aliquam erat volutpat. Nullam magna orci,
          accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse metus purus, gravida vehicula
          eros in, malesuada posuere magna.
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
