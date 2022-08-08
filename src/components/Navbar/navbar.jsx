import styles from "./navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts";
import { toast } from "react-toastify";
const Navbar = ({ searchInput, setSearchInput }) => {
  const {
    authState: { token},
    authDispatch,
  } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
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

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" title="home">
          <div className={styles.brand}>BloomTube</div>
        </Link>
        {location.pathname ===  "/" && (
        <div className={styles.search}>
          <button className={styles.searchIcon}>
            <i className="fas fa-search"></i>
          </button>

          <input
            type="search"
            placeholder="search items here"
            value={searchInput}
            onChange={searchInputHandler}
          />
        </div>
        )}
        <ul className={styles.naviItems}>

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
