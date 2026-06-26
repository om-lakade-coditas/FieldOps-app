import { useForm } from "react-hook-form"
import { PrimaryBtn } from "../Button/Button"
import styles from "./Register.module.scss"
import type { RegisterData } from "./Register.types";
import { useRegisterMutation } from "../../../redux/slices/authApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginRegister } from "../../../redux/slices/loginRegisterSlice";

import ValidationInfo from "../ValidationInfo/ValidationInfo";
import { useTypedSelector } from "../../../redux/store/store";
import  { ValidationInfoService } from "../../../redux/slices/ValidationInfoSlice";



const Register = () => {
    
    const { handleSubmit, register, formState } = useForm<RegisterData>();
    const [ registerService ] = useRegisterMutation();
    const dispatch = useDispatch();

    const showValidationModal = useTypedSelector((state)=> state.ValidationInfo.isModalOpen);
    const showPasswordConstraints = useTypedSelector((state) => state.ValidationInfo.showPassConstraints)

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
                <input className={styles.Input} type="text" {...register("name", {required:{ value: true, message: "Please Fill this field"}, minLength:{value:2, message:"Please Enter more than 1 character"}})} id="" placeholder="John Doe"/>
                {showValidationModal && formState.errors.name?.message ? 
                 <div className={styles.ValidationFloat}>
                    <ValidationInfo>{formState.errors.name.message}</ValidationInfo>
                </div> : ""}
            </div>
            <div className={styles.EmailInput}>
                <input className={styles.Input} type="email" {...register("email", { required : { value:true, message:"Please Enter Valid Email"} })} id="" placeholder="You@example.com"/>
                {showValidationModal && formState.errors.email?.message ? 
                 <div className={styles.ValidationFloat}>
                    <ValidationInfo>{formState.errors.email.message}</ValidationInfo>
                </div> : ""}
            </div>
            <div className={styles.PasswordInput}>
                <input className={styles.Input} type="password"  {...register("password", {required:{ value:true, message: "Please Fill this field"}, minLength:{value:8, message:"Should include 8 characters"}})} onFocus={()=>{
                    dispatch(ValidationInfoService.actions.showPasswordConstraints())
                }}  id="" placeholder="Password here..."/>
                {showValidationModal && formState.errors.password?.message ? 
                 <div className={styles.ValidationFloat}>
                    <ValidationInfo>{formState.errors.password.message}</ValidationInfo>
                </div> : ""}
            </div>
              {showPasswordConstraints ? 
              <div>
                <h5>Min Length: 8 characters</h5>
            </div> : ""}
            <div className={styles.RedirectBox}>
                <h4 className={styles.Redirect} onClick={()=> {
                    dispatch(loginRegister.actions.setLoggedInTrue())
                }}>Already Registered? Login here!</h4>
            </div>
            <div className={styles.BtnContainer}>
                <PrimaryBtn type="submit" className={styles.RegisterBtn}>Register</PrimaryBtn>
            </div>
        </form>
    </div>
  )
}

export default Register