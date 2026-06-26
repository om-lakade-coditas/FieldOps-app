import { useForm } from "react-hook-form";
import { PrimaryBtn, SecondaryBtn } from "../Button/Button";
import styles from "./CreateJobs.module.scss";
import { useGetJobsQuery, useUploadJobsMutation } from "../../../redux/slices/jobsApiSlice";
import type { CreateJobsProps, FormDetails } from "./CreateJobs.types";

const CreateJobs = ({ dispatchFn }: CreateJobsProps) => {
    const { register, handleSubmit} = useForm<FormDetails>();
    const [ uploadJobsService ] = useUploadJobsMutation();

    const handleFormUpload = async(jobData:FormDetails) => {
        const data = {
            jobData : jobData,
            token: JSON.parse(localStorage.getItem("accessToken") as string)
        }
        const response = await uploadJobsService(data).unwrap()
        if(response){
            refetch();
            dispatchFn({type:"setFormClose"})
        }

    }
    const { refetch } = useGetJobsQuery(JSON.parse(localStorage.getItem("accessToken") as string));
    

  return (
    <div className={styles.CreateJobs}>
        <form className={styles.CreateJobsForm} onSubmit={handleSubmit(handleFormUpload)}>
            <textarea className={styles.JobsInput}  {...register("description")} id="" placeholder="Description"/>
            <select className={styles.JobsInput} {...register("category")} id="" defaultValue={"none"}>
                <option disabled value="none">Choose Category</option>
                <option value="REQUESTED">REQUESTED</option>
                <option value="ASSIGNED">ASSIGNED</option>
                <option value="EN_ROUTE">EN_ROUTE</option>
                <option value="ON_SITE">ON_SITE</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="CANCELLED">CANCELLED</option>
            </select>
            <select className={styles.JobsInput} {...register("urgency")} id="" defaultValue={"none"}>
                <option value="none">Choose Priority</option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            {/* <input type="file" name="" id="" /> */}
            <div className={styles.BtnContainer}>
                <PrimaryBtn type="submit">Upload</PrimaryBtn>
                <SecondaryBtn onClick={()=>{
                    dispatchFn({type:"setFormClose"})
                }}>Cancel</SecondaryBtn>
            </div>
        </form>
    </div>
  )
}

export default CreateJobs;