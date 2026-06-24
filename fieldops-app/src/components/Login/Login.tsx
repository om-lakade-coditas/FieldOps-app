import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Login.module.scss"
import type { UserDetails } from "./Login.types";
import { useLoginMutation } from "../../redux/slices/authApiSlice";
import { useAppDispatch } from "../../redux/store/store";
import { loginRegister } from "../../redux/slices/loginRegisterSlice";
import { toast, ToastContainer } from "react-toastify";



const Login = () => {

    const [ loginService ] = useLoginMutation();

    const { register, handleSubmit } = useForm<UserDetails>();
    const handleLogin = async(data: UserDetails) => {
        try {
            const response = await loginService(data).unwrap();
            console.log(response)
            if(response.accessToken){
                toast.success("Login success!")
            }
        } catch (error:any) {
            toast.error(error)
        }
    }

    const dispatch = useAppDispatch();

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
            <div className={styles.RedirectBox}>
                <h5 onClick={()=>{
                    dispatch(loginRegister.actions.setLoggedInFalse())
                }} className={styles.Redirect}>New User? Register Here!</h5>
            </div>
            <div className={styles.BtnContainer}>
                <PrimaryBtn className={styles.LoginBtn}>Login</PrimaryBtn>
            </div>
            <ToastContainer position="top-center"/>
        </form>
    </div>
  )
}

export default Login