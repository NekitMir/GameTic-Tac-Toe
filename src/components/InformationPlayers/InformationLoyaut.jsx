import styles from './InformationDisplay.module.css'

export const InformationLoyaut = ({isDraw, isGameEnded, currentPlayer}) => {
  return (
    <div className={styles.container}>
      {isDraw ? (
        <div className={styles.message}>Ничья!</div>
      ) : isGameEnded ? (
        <div className={styles.message}>
          <span className={styles.winner}>Победа: {currentPlayer}</span>
        </div>
      ) : (
        <div className={styles.message}>
          <span className={styles.current}>Ход: {currentPlayer}</span>
        </div>
      )}
    </div>
  )
}