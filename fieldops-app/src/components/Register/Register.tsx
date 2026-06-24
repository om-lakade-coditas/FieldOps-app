import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Register.module.scss"
import type { RegisterData } from "./Register.types";
import { useRegisterMutation } from "../../redux/slices/authApiSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginRegister } from "../../redux/slices/loginRegisterSlice";



const Register = () => {
    
    const { handleSubmit, register } = useForm<RegisterData>();
    const [ registerService ] = useRegisterMutation();
    const dispatch = useDispatch();

    const handleRegistration = async(data: RegisterData) => {
       try {
         console.log(data)
         const response = await registerService(data).unwrap();
         console.log(response)
         if(response.accessToken){
             toast.success("Registration Successful! Please Log in!")
             setTimeout(()=>{
                 dispatch(loginRegister.actions.setLoggedInTrue())
             },3000)
         }
       } catch (error:any) {
        toast.error(error)
       }
    }

  return (
    <div className={styles.RegisterBox}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(handleRegistration)} className={styles.RegisterForm}>
            <div className={styles.NameInput}>
                <input className={styles.Input} type="text" {...register("name", {required:true})} id="" placeholder="John Doe"/>
            </div>
            <div className={styles.EmailInput}>
                <input className={styles.Input} type="email" {...register("email", {required:true})} id="" placeholder="You@example.com"/>
            </div>
            <div className={styles.PasswordInput}>
                <input className={styles.Input} type="password" {...register("password", {required:true,minLength:8})} id="" placeholder="Password here..."/>
            </div>
            <div className={styles.PasswordInput}>
                <h5 className={styles.Redirect} onClick={()=> {
                    dispatch(loginRegister.actions.setLoggedInTrue())
                }}>Already Registered? Login here!</h5>
            </div>
            <div className={styles.BtnContainer}>
                <PrimaryBtn type="submit" className={styles.RegisterBtn}>Register</PrimaryBtn>
            </div>
            <ToastContainer position="top-center" />
        </form>
    </div>
  )
}

export default Register