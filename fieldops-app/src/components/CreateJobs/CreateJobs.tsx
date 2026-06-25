import { useForm } from "react-hook-form";
import { PrimaryBtn, SecondaryBtn } from "../Button/Button";
import styles from "./CreateJobs.module.scss";
import { useUploadJobsMutation } from "../../redux/slices/jobsApiSlice";
import type { CreateJobsProps, FormDetails } from "./CreateJobs.types";

const CreateJobs = ({ dispatchFn }: CreateJobsProps) => {
    const { register, handleSubmit} = useForm<FormDetails>();
    const [ uploadJobsService ] = useUploadJobsMutation();

    const handleFormUpload = async(data:FormDetails) => {
        const response = await uploadJobsService(data).unwrap()
        console.log(response)
    }


  return (
    <div className={styles.CreateJobs}>
        <form className={styles.CreateJobsForm} onSubmit={handleSubmit(handleFormUpload)}>
            <input className={styles.JobsInput} type="text" {...register("description")} id="" placeholder="Description"/>
            <select className={styles.JobsInput} {...register("urgency")} id="">
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            <input type="file" name="" id="" />
            <div className={styles.BtnContainer}>
                <PrimaryBtn onClick={()=>{
                    dispatchFn({type:"setFormClose"})
                }}>Upload</PrimaryBtn>
                <SecondaryBtn onClick={()=>{
                    dispatchFn({type:"setFormClose"})
                }}>Cancel</SecondaryBtn>
            </div>
        </form>
    </div>
  )
}

export default CreateJobs;