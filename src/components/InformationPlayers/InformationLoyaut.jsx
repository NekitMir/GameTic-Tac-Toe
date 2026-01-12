import styles from './InformationDisplay.module.css';
import { useSelector } from 'react-redux';

export const InformationLoyaut = () => {
  const isDraw = useSelector((state) => state.isDraw);

  const isGameEnded = useSelector((state) => state.isGameEnded);

  const winner = useSelector((state) => state.winner);

  const currentPlayer = useSelector((state) => state.currentPlayer);

  return (
    <div className={styles.container}>
      {isDraw ? (
        <div className={styles.message}>Ничья!</div>
      ) : isGameEnded ? (
        <div className={styles.message}>
          <span className={styles.winner}>Победа: {winner}</span>
        </div>
      ) : (
        <div className={styles.message}>
          <span className={styles.current}>Ход:{currentPlayer}</span>
        </div>
      )}
    </div>
  );
};
