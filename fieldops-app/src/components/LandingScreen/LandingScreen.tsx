import { PrimaryBtn } from "../Button/Button"
import styles from "./LandingScreen.module.scss"


const LandingScreen = () => {
  return (
    <div className={styles.LandingScreen}>
        <div className={styles.ImageContainer}>Image here</div>
        <div className={styles.LoginContainer}>
            <div className={styles.LoginBox}>
                <h2>Login</h2>
                <form className={styles.LoginForm}>
                    <div className={styles.EmailInput}>
                        <input className={styles.Input} type="email" name="" id="" placeholder="You@example.com" />
                    </div>
                    <div className={styles.PasswordInput}>
                        <input className={styles.Input} type="password" name="" id="" placeholder="Password Here..."/>
                    </div>
                    <div className={styles.BtnContainer}>
                        <PrimaryBtn>Login</PrimaryBtn>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LandingScreen