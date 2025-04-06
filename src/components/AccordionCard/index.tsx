'use client';

import { useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.scss';

interface AccordionCardProps {
  name: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionCard = ({ name, description, isOpen, onClick }: AccordionCardProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <button className={styles.header} onClick={onClick} aria-expanded={isOpen}>
        <h3>{name}</h3>
        <ExpandMoreIcon className={`${styles.expandIcon} ${isOpen ? styles.open : ''}`} />
      </button>
      <div
        className={styles.animatedContent}
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className={styles.content}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
