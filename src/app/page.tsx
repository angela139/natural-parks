import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <ImageGallery />
    </main>
  );
}
