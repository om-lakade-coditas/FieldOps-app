import styles from "./Sidebar.module.scss";
import type { SidebarProps } from "./Sidebar.types";

const Sidebar = ({ children, ...props }:SidebarProps) => {
  return (
    <div {...props} className={styles.Sidebar}>
        <div className={styles.CollapseSidebarContainer}>
          <span className={styles.CollapseSidebarBtn}>X</span>
        </div>
        <div className={styles.SidebarOptionContainer}>
          <h3 className={styles.SidebarOption}>Problems</h3>
          <h3 className={styles.SidebarOption}>Jobs</h3>
          <h3 className={styles.SidebarOption}>Users</h3>
        </div>
    </div>
  )
}

export default Sidebar