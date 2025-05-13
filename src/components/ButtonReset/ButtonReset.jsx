import styles from './ButtonReset.module.css'

export const ButtonReset = ({resetClick}) => {
  return (
    <button className={styles.button} onClick={resetClick}>
      Начать заново
    </button>
  )
}
