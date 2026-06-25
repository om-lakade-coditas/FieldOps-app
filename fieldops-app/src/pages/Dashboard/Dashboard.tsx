import styles from "./Dashboard.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import { useTypedSelector } from "../../redux/store/store";


const Dashboard = () => {
  const isSidebarOpen = useTypedSelector((state) => state.sidebar.isSidebarOpen)

  return (
    <div className={styles.Dashboard}>
      <div className={styles.SidebarIconContainer}>  
        {isSidebarOpen ? <Sidebar /> : <div className={styles.sidebarIcon}><img src="sidebarIcon.png" alt="" /></div>}
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
