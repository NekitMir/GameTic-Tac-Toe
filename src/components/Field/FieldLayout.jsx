import styles from './Field.module.css';
import { useSelector } from 'react-redux';

export const FieldLayout = ({ handleClick }) => {
  const field = useSelector((state) => state.field);

  return (
    <>
      <div className={styles.container}>
        {field.map((item, index) => (
          <div className={styles.cell} key={index} onClick={() => handleClick(index)}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
