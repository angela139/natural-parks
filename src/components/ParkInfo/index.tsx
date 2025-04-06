'use client';

import AccordionCard from '@/components/AccordionCard';
import parks from '@/lib/constants/parks';
import { useState } from 'react';
import styles from './style.module.scss';

const ParkInfo = () => {
  const [openName, setOpenName] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpenName(prev => (prev === name ? null : name));
  };

  return (
    <div className={styles.container}>
      {parks.map(park => (
        <div key={park.name}>
          {/* Desktop Card */}
          <div className={styles.card}>
            <h3>{park.name}</h3>
            <p>{park.description}</p>
          </div>
          {/* Mobile Accordion */}
          <div className={styles.accordionCard}>
            <AccordionCard
              name={park.name}
              description={park.description}
              isOpen={openName === park.name}
              onClick={() => handleToggle(park.name)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkInfo;
