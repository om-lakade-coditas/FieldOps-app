import { useTypedSelector } from "../../redux/store/store"
import Login from "../Login/Login"
import Register from "../Register/Register"
import styles from "./LandingScreen.module.scss"



const LandingScreen = () => {
  const showLogin = useTypedSelector((state)=> state.loginRegister.showLogin);
  
  
  return (
    <div className={styles.LandingScreen}>
        <div className={styles.ImageContainer}>
        </div>
        <div className={styles.LoginContainer}>
            {showLogin ? <Login/> : <Register/>}
        </div>
    </div>
  )
}

export default LandingScreen