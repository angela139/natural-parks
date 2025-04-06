import Image from 'next/image';
import LandingImage from '../../../public/assets/landing.png';
import styles from './style.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.landingText}>Lorem Ipsum</h1>
      <div className={styles.imageContainer}>
        <Image src={LandingImage} alt="Landing Image" fill priority />
      </div>
    </div>
  );
};

export default Hero;
