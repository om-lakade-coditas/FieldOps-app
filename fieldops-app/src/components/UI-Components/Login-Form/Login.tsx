import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Login.module.scss"
import type { JwtPayload, UserDetails } from "./Login.types";
import { useLoginMutation } from "../../../redux/slices/authApiSlice";
import { useAppDispatch, useTypedSelector } from "../../../redux/store/store";
import { loginRegister } from "../../../redux/slices/loginRegisterSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { authUser } from "../../../redux/slices/authUserSlice";
import ValidationInfo from "../ValidationInfo/ValidationInfo";
import Cookies from "js-cookie"


const Login = () => {

    const [ loginService ] = useLoginMutation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<UserDetails>();
    const dispatch = useAppDispatch();
    const showValidationModal = useTypedSelector((state)=> state.ValidationInfo.isModalOpen);


    const handleLogin = async(data: UserDetails) => {
        try {
            const response = await loginService(data).unwrap();
            const { accessToken: token } = response; 
            if(token){
                toast.success("Login success!")
                const { role } = jwtDecode(response.accessToken) as JwtPayload;
                dispatch(authUser.actions.setRole({payload:{role}}))
                localStorage.setItem("accessToken", JSON.stringify(token));
                Cookies.set('cookie-token', token, {
                    secure: true
                })
                switch(role){
                    case "CUSTOMER":
                        navigate("/Dashboard/")
                        break
                        case "DISPATCHER":
                        navigate("/Dashboard/Dispatcher")
                        break
                        case "TECHNICIAN":
                        navigate("/Dashboard/Technician")
                        break
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
                {showValidationModal && formState.errors.email?.message ? 
                    <div className={styles.ValidationFloat}>
                    <ValidationInfo>{formState.errors.email.message}</ValidationInfo>
                </div> : ""}
            </div>
            <div className={styles.PasswordInput}>
                <input className={styles.Input} type="password" {...register("password", { required:{value:true, message:"Please Enter Password"} })} placeholder="Password Here..."/>
                {showValidationModal && formState.errors.password?.message ? 
                    <div className={styles.ValidationFloat}>
                    <ValidationInfo>{formState.errors.password.message}</ValidationInfo>
                </div> : ""}
            </div>
            <div className={styles.RedirectBox}>
                <h5 onClick={()=>{
                    dispatch(loginRegister.actions.setLoggedInFalse())
                }} className={styles.Redirect}>New User? Register Here!</h5>
            </div>
            <div className={styles.BtnContainer}>
                <PrimaryBtn className={styles.LoginBtn}>Login</PrimaryBtn>
            </div>
        </form>
    </div>
  )
}

export default Login