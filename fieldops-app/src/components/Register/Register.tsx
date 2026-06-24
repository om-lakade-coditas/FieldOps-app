import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Register.module.scss"
import type { actionType, PassValidation, RegisterData } from "./Register.types";
import { useRegisterMutation } from "../../redux/slices/authApiSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginRegister } from "../../redux/slices/loginRegisterSlice";
import { useReducer } from "react";


const initialState = {
    isPassLengthValid: false,
    doesIncludeUppercase: false,
}

const reducer = (data: PassValidation , action:actionType) => {
    if(action.type=== "passLength"){
        return {...data, isPassLengthValid: true}
    }
    else if(action.type==="doesIncludeUppercase"){
        return {...data, doesIncludeUppercase:true}
    }
    else {
        return data
    }
}

const Register = () => {
    
    const { handleSubmit, register, formState } = useForm<RegisterData>();
    const [ registerService ] = useRegisterMutation();
    const dispatch = useDispatch();
    const [state, dispatchFn] = useReducer(reducer, initialState)

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

    const checkValidation = () => {
        console.log(formState)
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
                <input className={styles.Input} type="password"  {...register("password", {required:true,minLength:{value:8, message:"Should include 8 characters"}})} onChange={()=>{
                    checkValidation()
                }} id="" placeholder="Password here..."/>
            </div>
            <div className={styles.PasswordValidation}>
                <h5 className={state.isPassLengthValid ? styles.Valid : styles.Invalid}>Password Maxlength : 8 characters</h5>
                <h5 className={state.doesIncludeUppercase ? styles.Valid : styles.Invalid}>Password Maxlength : 8 characters</h5>
            </div>
            <div className={styles.RedirectBox}>
                <h4 className={styles.Redirect} onClick={()=> {
                    dispatch(loginRegister.actions.setLoggedInTrue())
                }}>Already Registered? Login here!</h4>
            </div>
            <div className={styles.BtnContainer}>
                <PrimaryBtn type="submit" className={styles.RegisterBtn}>Register</PrimaryBtn>
            </div>
            <ToastContainer position="top-center"/>
        </form>
    </div>
  )
}

export default Register