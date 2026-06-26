import { useTypedSelector } from "../../../redux/store/store";
import styles from "./TechnicianDashboard.module.scss";

const TechnicianDashboard = () => {
    const userRole = useTypedSelector((state) => state.userInfo.user_role)
    console.log(userRole)

  return (
    <div className={styles.TechnicianDashboard}>
        Technician Dashboard
    </div>
  )
}

export default TechnicianDashboard;