import { useForm } from "react-hook-form";
import { PrimaryBtn } from "../Button/Button";
import styles from "./CreateJobs.module.scss";
import { useUploadJobsMutation } from "../../redux/slices/jobsApiSlice";
import type { FormDetails } from "./CreateJobs.types";

const CreateJobs = () => {
    const { register, handleSubmit} = useForm<FormDetails>();

    const [ uploadJobsService ] = useUploadJobsMutation();


    const handleFormUpload = async(data:FormDetails) => {
        const response = await uploadJobsService(data).unwrap()
        console.log(response)
    }

    
  return (
    <div className={styles.CreateJobs}>
        <form onSubmit={handleSubmit(handleFormUpload)}>
            <input type="text" {...register("category")} id="" placeholder="category"/>
            <input type="text" {...register("description")} id="" placeholder="Description"/>
            <select {...register("urgency")} id="">
                <option value="LOW">Low</option>
                <option value="HIGH"></option>
                <option value="MEDIUM"></option>
            </select>
            <PrimaryBtn>Upload</PrimaryBtn>
        </form>
    </div>
  )
}

export default CreateJobs