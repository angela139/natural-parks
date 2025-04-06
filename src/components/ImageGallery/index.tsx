import Image from 'next/image';
import ParkInfo from '@/components/ParkInfo';
import styles from './style.module.scss';

const images = ['/assets/park1.png', '/assets/park2.png', '/assets/park3.png'];

const ImageGallery = () => {
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
      <div className={styles.gallery}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={src} alt={`Park image ${index + 1}`} fill />
          </div>
        ))}
      </div>
      <ParkInfo />
    </div>
  );
};

export default ImageGallery;
