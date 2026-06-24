import { useDispatch } from "react-redux";
import styles from "./PasswordInfo.module.scss";
import type { PasswordInfoProps } from "./PasswordInfo.types";
import { passwordInfoService } from "../../redux/slices/passwordInfoSlice";


const PasswordInfo = ({ children }: PasswordInfoProps) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.PasswordInfoBox}>
      <span className={styles.PasswordInfo}>
          {children}  
          <span onClick={()=>{
            dispatch(passwordInfoService.actions.closeModal())
          }} className={styles.closeBtn}>X</span>
      </span>
    </div>
  )
}

export default PasswordInfo;