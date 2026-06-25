import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Login.module.scss"
import type { JwtPayload, UserDetails } from "./Login.types";
import { useLoginMutation } from "../../redux/slices/authApiSlice";
import { useAppDispatch, useTypedSelector } from "../../redux/store/store";
import { loginRegister } from "../../redux/slices/loginRegisterSlice";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { authUser } from "../../redux/slices/authUserSlice";



const Login = () => {

    const [ loginService ] = useLoginMutation();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<UserDetails>();
    const dispatch = useAppDispatch();

    const handleLogin = async(data: UserDetails) => {
        try {
            const response = await loginService(data).unwrap();
            console.log(response)
            if(response.accessToken){
                toast.success("Login success!")
                const { role } = jwtDecode(response.accessToken) as JwtPayload;
                if(role==="CUSTOMER"){
                    dispatch(authUser.actions.setRoleAsCustomer())
                    setTimeout(()=>{
                        navigate("/Home")
                    },3000)
                }
                else if(role==="TECHNICIAN"){
                    dispatch(authUser.actions.setRoleAsTechnician())
                    setTimeout(()=>{
                        navigate("/Technician")
                    },3000)
                }
                else if(role==="DISPATCHER"){
                    dispatch(authUser.actions.setRoleAsDispatcher())
                    setTimeout(()=>{
                        navigate("/Dispatcher")
                    },3000)
                }
            }
        } catch (error:any) {
            toast.error(error)
        }
    }


  return (
    <div className={styles.LoginBox}>
        <h2 className={styles.LoginTitle}>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className={styles.LoginForm}>
            <div className={styles.EmailInput}>
                <input className={styles.Input} type="email" {...register("email", { required: {value: true, message:"Please Enter Email"} })} placeholder="You@example.com" />
            </div>
            <div className={styles.PasswordInput}>
                <input className={styles.Input} type="password" {...register("password", { required:{value:true, message:"Please Enter Password"} })} placeholder="Password Here..."/>
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