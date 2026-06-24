import Login from "../Login/Login"
import styles from "./LandingScreen.module.scss"

const LandingScreen = () => {
  return (
    <div className={styles.LandingScreen}>
        <div className={styles.ImageContainer}>
        </div>
        <div className={styles.LoginContainer}>
            <Login/>
        </div>
    </div>
  )
}

export default LandingScreen