import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Login.module.scss"
import type { UserDetails } from "./Login.types";



const Login = () => {

  const { register, handleSubmit } = useForm<UserDetails>();
  const handleLogin = async(data: UserDetails) => {

  }


  return (
    <div className={styles.LoginBox}>
        <h2 className={styles.LoginTitle}>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.LoginForm}>
            <div className={styles.EmailInput}>
                <input className={styles.Input} type="email" {...register("email", { required:true })} placeholder="You@example.com" />
            </div>
            <div className={styles.PasswordInput}>
                <input className={styles.Input} type="password" {...register("password", { required:true })} placeholder="Password Here..."/>
            </div>
            <div className={styles.BtnContainer}>
                <PrimaryBtn className={styles.LoginBtn}>Login</PrimaryBtn>
            </div>
        </form>
    </div>
  )
}

export default Login