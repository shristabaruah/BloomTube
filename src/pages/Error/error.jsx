import { Link } from "react-router-dom";
import { error } from "../../Assets";
import styles from "./error.module.css";

const Error = ()=>{
   return( <div className={styles.error_container}>
        <img src={error} alt="" className={styles.error_image}/>
    <Link to='/'><h3 className={styles.text}>Go Back To Home</h3></Link>    
    </div>)
};
export {Error}