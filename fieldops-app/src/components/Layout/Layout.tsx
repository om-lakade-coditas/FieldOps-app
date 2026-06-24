import { Outlet } from "react-router"
import Header from "../Header/Header"
import styles from "./Layout.module.scss"


const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout