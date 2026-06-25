import { PrimaryBtn } from "../Button/Button"
import styles from "./Searchbar.module.scss"

const Searchbar = () => {
  return (
    <div className={styles.Searchbar}>
        <div className={styles.SearchbarContainer}>
          <input className={styles.SearchbarInput} type="text" name="" id="" />
          <PrimaryBtn>🔍</PrimaryBtn>
        </div>
    </div>
  )
}

export default Searchbar