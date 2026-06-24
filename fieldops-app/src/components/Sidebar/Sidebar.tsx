import styles from "./Sidebar.module.scss";
import type { SidebarProps } from "./Sidebar.types";

const Sidebar = ({ children, ...props }:SidebarProps) => {
  return (
    <div {...props} className={styles.Sidebar}>
        {children}
    </div>
  )
}

export default Sidebar