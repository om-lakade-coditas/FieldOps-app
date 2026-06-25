import styles from "./Filter.module.scss";
import type { FilterProps } from "./Filter.types";

const Filter = ({ children }: FilterProps) => {
  return (
    <div className={styles.Filter}>
        <select name="" id="">
            
            {children}
        </select>
    </div>

  )
}

export default Filter