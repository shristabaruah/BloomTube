import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts";
import { toast } from "react-toastify";
const Navbar = () => {
  const {
    authState: { token, user },
    authDispatch,
  } = useAuth();

  const navigate = useNavigate();
  const checkStatus = (token) => {
    return token ? "Logout" : "Login";
  };
  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("Logged Out Successfully");
  };
  const loginActionHandler = (type) => {
    type === "Login" ? navigate("/login") : logoutHandler();
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" title="home">
          <div className={styles.brand}>BloomTube</div>
        </Link>
        <div className={styles.search}>
          <button className={styles.searchIcon}>
            <i className="fas fa-search"></i>
          </button>
          <input type="search" placeholder="search items here"></input>
        </div>
        <ul className={styles.naviItems}>
          <li>{token ? `Hi ${user.firstName}` : ""}</li>

          <li>
            <button
              className={styles.btn}
              onClick={() => loginActionHandler(checkStatus(token))}
            >
              {checkStatus(token)}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Navbar };
