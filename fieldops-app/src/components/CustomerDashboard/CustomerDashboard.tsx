import { useEffect, useReducer } from "react";
import { useGetJobsQuery } from "../../redux/slices/jobsApiSlice";
import { PrimaryBtn } from "../Button/Button";
import Filter from "../Filter/Filter";
import Options from "../Options/Options";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./CustomerDashboard.module.scss";
import CreateJobs from "../CreateJobs/CreateJobs";
import type { actionType, JobsFormState } from "./CustomerDashboard.types";

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
  
  console.log(jobs)
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
      <div className={styles.ProblemsBoxContainer}>
        <h2>Your Jobs </h2>
        <div className={styles.ProblemsBox}>
          {jobs?.map((job:{description:string },idx: number)=>{
            return <li className={styles.Job} key={idx}>{job.description}</li>
          })}
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard;