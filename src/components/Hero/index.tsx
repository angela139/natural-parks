'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import LandingImage from '../../../public/assets/landing.png';
import styles from './style.module.scss';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 30]);
  const bgY = useSpring(y, { stiffness: 40, damping: 15 });
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className={styles.container} ref={containerRef}>
      <motion.h1 className={styles.landingText} style={{ opacity }}>
        Explore Nature
      </motion.h1>

      <motion.div className={styles.imageContainer} style={{ y: bgY }}>
        <Image src={LandingImage} alt="Landing Image" fill sizes={'1000px'} priority />
      </motion.div>
    </div>
  );
};

export default Hero;
