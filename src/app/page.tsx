import Hero from '@/components/Hero';
import ParkGallery from '@/components/ParkGallery';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <ParkGallery />
    </main>
  );
}
