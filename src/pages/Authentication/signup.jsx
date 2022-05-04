import { Link } from "react-router-dom";
import styles from "./authentication.module.css";
const SignUp = () => {
  return (
    <form className={styles.form}>
      <h1>Sign In</h1>
      <div className={styles.name_container}>
        <div className={styles.name}>
          <label htmlFor="FirstName">First Name</label>
          <input type="text" name="firstName" placeholder="First Name" />
        </div>
        <div className={styles.name}>
          <label htmlFor="LasttName">Last Name</label>
          <input type="text" name="lasttName" placeholder="Last Name" />
        </div>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email" className={styles.email}>
          Email
        </label>
        <input type="email" name="email" id="email" placeholder="email" />
      </div>
      <div className={styles.input_container}>
        <label className={styles.password}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
        />
      </div>
      <div className={styles.checkbox_container}>
        <label>
          <input
            type="checkbox"
            id="remember-me"
            className={`checkbox-input ${styles.checkbox}`}
          />
          I accept all terms & conditions
        </label>
      </div>
      <button className={`btn-link btn ${styles.btn}`} type="button">
        Sign In
      </button>
      <div className={styles.signup}>
        Already have an account ?{" "}
        <Link to="/login">
          <span className={styles.span_btn}>Login</span>
        </Link>
      </div>
    </form>
  );
};
export { SignUp };
