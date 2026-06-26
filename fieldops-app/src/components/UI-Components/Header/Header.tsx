import { useNavigate } from "react-router";
import styles from "./Header.module.scss";


const Header = () => {

    const navigate = useNavigate();
  return (
    <>
        <div className={styles.Header}>
            <div onClick={()=>{
                navigate("/")
            }} className={styles.CompanyName}>FieldOps</div>
        </div>
    </>
)
}

export default Header