import { useGetJobsQuery } from "../../redux/slices/jobsApiSlice";
import { useTypedSelector } from "../../redux/store/store";
import { PrimaryBtn } from "../Button/Button";
import Filter from "../Filter/Filter";
import Options from "../Options/Options";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./CustomerDashboard.module.scss";

const CustomerDashboard = () => {

  const [ getJobs ] = useGetJobsQuery();

  const getJobs = async() => {
    const response = await 
  }
  
  return (
    <div className={styles.CustomerDashboard}>
      <div className={styles.Header}>
        <Searchbar/>
        <PrimaryBtn className={styles.CreateEnquiryBtn}>Create an Enquiry</PrimaryBtn>
        <Filter>
          <Options>All</Options>
          <Options>opt 2</Options>
        </Filter>
      </div>
      <div className={styles.ProblemsBox}>
        <h3>No issues uploaded yet!</h3>
      </div>
    </div>
  )
}

export default CustomerDashboard;