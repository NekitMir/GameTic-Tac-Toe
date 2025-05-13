import styles from './Field.module.css'

export const FieldLayout = ({field, handleClick}) => {
  
  return (
    <>
    <div className={styles.container}>
      {field.map((item, index) => (
        <div 
          className={styles.cell} 
          key={index} 
          onClick={() => handleClick(index)}>
          {item}
        </div>
      ))}
    </div>
    </>
    
  )
}
