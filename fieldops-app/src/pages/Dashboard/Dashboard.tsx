import styles from "./Dashboard.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
