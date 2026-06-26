import styles from "./Dashboard.module.scss";
import Sidebar from "../../components/UI-Components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import { useTypedSelector } from "../../redux/store/store";
import { useDispatch } from "react-redux";
import { sidebar } from "../../redux/slices/sidebarSlice";


const Dashboard = () => {
  const isSidebarOpen = useTypedSelector((state) => state.sidebar.isSidebarOpen)
  const dispatch = useDispatch();

  return (
    <div className={styles.Dashboard}>
      <div className={styles.SidebarIconContainer}>  
        {isSidebarOpen ? <Sidebar /> : 
          <div className={styles.SidebarContainer}> 
            <span onClick={()=>{
              dispatch(sidebar.actions.openSidebar())
            }} className={styles.SidebarIcon}>▥</span> 
          </div>}
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
