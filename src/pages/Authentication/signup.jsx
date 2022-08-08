import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts";
import styles from "./authentication.module.css";
import { SignupService } from "../../Services";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const guestUser = {
    firstName: "John",
    lastName: "Doe",
    email: "JohnDoe@gmail.com",
    password: "Jd2022",
  };
  const guestHandler = (e) => {
    e.preventDefault();
    if (setUser(guestUser)) {
      submitHandler();
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    if (user.firstName && user.email && user.password) {
      e.preventDefault();
      try {
        const response = await SignupService(user);
        if (response.status === 201) {
          authDispatch({
            type: "SIGNUP",
            payload: {
              token: response.data.encodedToken,
              user: response.data.createdUser,
            },
          });
          toast.success("Signup Successful !!");
          navigate("/");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
        console.error("error", error);
      }
    } else {
      toast.error("Please enter all the fields");
    }
  };
  return (
    <form className={styles.form}>
      <h1>Sign In</h1>
      <div className={styles.name_container}>
        <div className={styles.name}>
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={changeHandler}
            value={user.firstName}
            required
          />
        </div>
        <div className={styles.name}>
          <label htmlFor="LasttName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lastName}
            required
          />
        </div>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email" className={styles.email}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={changeHandler}
          value={user.email}
          required
        />
      </div>
      <div className={styles.input_container}>
        <label className={styles.password}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          onChange={changeHandler}
          value={user.password}
          required
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
      <div className={styles.btn_container}>
        <button
          className={`btn-link btn ${styles.btn}`}
          type="submit"
          onClick={guestHandler}
        >
          Dummy SignUp
        </button>

        <button
          className={`btn-link btn ${styles.btn}`}
          type="submit"
          onClick={submitHandler}
        >
          Sign Up
        </button>
      </div>
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
