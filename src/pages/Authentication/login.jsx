import { Link } from "react-router-dom";
import styles from "./authentication.module.css";
const Login = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <div className={styles.input_container}>
        <label htmlFor="email" className={styles.email}>
          Email
        </label>
        <input type="email" name="email" id="email" placeholder="email" />
      </div>
      <div className={styles.input_container}>
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
        />
      </div>
      <div className={styles.checkbox_container}>
        <label className={styles.remember_me}>
          <input
            type="checkbox"
            id="remember-me"
            className={`checkbox-input ${styles.checkbox}`}
          />
          Remember me
        </label>
      </div>
      <button className={`btn-link btn ${styles.btn}`} type="button">
        LogIn
      </button>
      <button className={`btn-link ${styles.btn}`}>Guest LogIn</button>

      <div className={styles.signup}>
        Dont have an account ?{" "}
        <Link to="/signup">
          <span className={styles.span_btn}>Sign up</span>
        </Link>
      </div>
    </form>
  );
};

export { Login };
