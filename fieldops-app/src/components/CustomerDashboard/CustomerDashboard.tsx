import { useEffect } from "react";
import { useGetJobsQuery } from "../../redux/slices/jobsApiSlice";
import { useTypedSelector } from "../../redux/store/store";
import { PrimaryBtn } from "../Button/Button";
import Filter from "../Filter/Filter";
import Options from "../Options/Options";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./CustomerDashboard.module.scss";
import CreateJobs from "../CreateJobs/CreateJobs";

const CustomerDashboard = () => {

  const { data: jobs = [], refetch } = useGetJobsQuery(JSON.parse(localStorage.getItem("accessToken") as string));


  useEffect(() => {
    if (refetch) refetch()
  }, [refetch])
  

  return (
    <div className={styles.CustomerDashboard}>
      <div className={styles.Header}>
        <Searchbar/>
        <PrimaryBtn className={styles.CreateEnquiryBtn}>Create an Enquiry</PrimaryBtn>
        <Filter>
          <Options>Low</Options>
          <Options>Medium</Options>
          <Options>High</Options>
        </Filter>
      </div>
      <CreateJobs/>
      <div className={styles.ProblemsBox}>
        <div>
          {jobs?.map((job:{description:string },idx: number)=>{
            return <li key={idx}>{job.description}</li>
          })}
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard;