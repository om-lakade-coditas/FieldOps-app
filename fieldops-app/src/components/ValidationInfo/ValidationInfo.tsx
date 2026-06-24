import { useDispatch } from "react-redux";
import styles from "./ValidationInfo.module.scss";
import type { ValidationInfoProps } from "./ValidationInfo.types";
import { ValidationInfoService } from "../../redux/slices/ValidationInfoSlice";


const ValidationInfo = ({ children }: ValidationInfoProps) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.ValidationInfoBox}>
      <span className={styles.ValidationInfo}>
          {children}  
          <span onClick={()=>{
            dispatch(ValidationInfoService.actions.closeModal())
          }} className={styles.closeBtn}>X</span>
      </span>
    </div>
  )
}

export default ValidationInfo;