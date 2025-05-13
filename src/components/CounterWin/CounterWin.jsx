import styles from './CounterWin.module.css'

export const CounterWin = ({countWin}) => {
  
  return (
    <div className={styles.container}>
    <div className={styles.score}>
      <span className={styles.player}>X</span>
      <span className={styles.count}>{countWin.X}</span>
    </div>
    <div className={styles.score}>
      <span className={styles.player}>O</span>
      <span className={styles.count}>{countWin.O}</span>
    </div>
  </div>
  )
}