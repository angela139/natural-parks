import parks from '@/lib/constants/park';
import styles from './style.module.scss';

const ParkInfo = () => {
  return (
    <div className={styles.container}>
      {parks.map((park, index) => (
        <div key={index} className={styles.card}>
          <h3>{park.name}</h3>
          <p>{park.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ParkInfo;
