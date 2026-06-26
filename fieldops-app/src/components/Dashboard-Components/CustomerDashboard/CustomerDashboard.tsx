import { useEffect, useReducer } from "react";
import { useGetJobsQuery } from "../../../redux/slices/jobsApiSlice";
import { PrimaryBtn } from "../../UI-Components/Button/Button";
import Filter from "../../UI-Components/Filter/Filter";
import Options from "../../UI-Components/Options/Options";
import Searchbar from "../../UI-Components/Searchbar/Searchbar";
import styles from "./CustomerDashboard.module.scss";
import CreateJobs from "../../UI-Components/CreateJobsForm/CreateJobs";
import type { actionType, jobDetails, JobsFormState } from "./CustomerDashboard.types";
const initialState = {
  isFormOpen: false
}

const reducer = (state: JobsFormState, action: actionType) => {
  switch(action.type){
    case "setFormOpen":
      return {
        ...state, isFormOpen: true
      }
    case "setFormClose":
      return {
        ...state, isFormOpen: false
      }
    default:
      return state;
  }
}

const CustomerDashboard = () => {

  const { data: jobs = [], refetch } = useGetJobsQuery(JSON.parse(localStorage.getItem("accessToken") as string));

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (refetch) refetch()
  }, [refetch])
  
  return (
    <div className={styles.CustomerDashboard}>
      <div className={styles.Header}>
        <Searchbar/>
        <PrimaryBtn onClick={()=>{ dispatch({type: "setFormOpen"}) }} className={styles.CreateEnquiryBtn}>Create an Enquiry</PrimaryBtn>
        <Filter>
          <Options>Low</Options>
          <Options>Medium</Options>
          <Options>High</Options>
        </Filter>
      </div>
      {state.isFormOpen ? <CreateJobs dispatchFn={dispatch}/>: ""}
      <div className={styles.JobsBoxContainer}>
          <h3>Your Jobs:</h3>
          <ul className={styles.JobsBox}>
            {jobs?.slice(0,5).reverse().map((job:jobDetails,idx: number)=>{
              return <li className={styles.Job} key={idx}>
                {job.description}
                <h5 className={styles[job.status]}>Current status : {job.status}</h5>
                <PrimaryBtn>View</PrimaryBtn>
                </li>
            })}
          </ul>
  
      </div>
    </div>
  )
}

export default CustomerDashboard;