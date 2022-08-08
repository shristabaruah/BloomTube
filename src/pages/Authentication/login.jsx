import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts";
import styles from "./authentication.module.css";
import { LoginService } from "../../Services";
import { toast } from "react-toastify";
const Login = () => {
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const guestUser = {
    email: "ShristaBaruah@gmail.com",
    password: "Sb2022",
  };

  const guestUserHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginService(user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({
          type: "LOGIN",
          payload: {
            token: response.data.encodedToken,
            user: response.data.foundUser,
          },
        });
        toast.success(`Welcome back ${response.data.foundUser.firstName}`);
        navigate("/");
      } else {
        throw new Error("Something went wrong !! ...Try again later");
      }
    } catch (error) {
      toast.error(error.response.data.errors[0]);
      console.error("eror", error);
    }
  };
  return (
    <form className={styles.form}>
      <h1>Login</h1>
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
        <label>Password</label>
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
        <label className={styles.remember_me}>
          <input
            type="checkbox"
            id="remember-me"
            className={`checkbox-input ${styles.checkbox}`}
          />
          Remember me
        </label>
      </div>
      <div className={styles.btn_container}>
        <button className={`btn-link ${styles.btn}`} onClick={guestUserHandler}>
          Guest LogIn
        </button>
        <button
          className={`btn-link btn ${styles.btn}`}
          type="submit"
          onClick={submitHandler}
        >
          LogIn
        </button>
      </div>
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
