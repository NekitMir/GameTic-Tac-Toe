import styles from './CounterWin.module.css';
import { useSelector } from 'react-redux';

export const CounterWin = () => {
  const counterWin = useSelector((state) => state.countWin);

  return (
    <div className={styles.container}>
      <div className={styles.score}>
        <span className={styles.player}>X</span>
        <span className={styles.count}>{counterWin.X}</span>
      </div>
      <span className={styles.span}>:</span>
      <div className={styles.score}>
        <span className={styles.player}>O</span>
        <span className={styles.count}>{counterWin.O}</span>
      </div>
    </div>
  );
};
