'use client';

import { useState } from 'react';
import styles from './style.module.scss';

interface AccordionCardProps {
  name: string;
  description: string;
}

const AccordionCard = ({ name, description }: AccordionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{name}</span>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
