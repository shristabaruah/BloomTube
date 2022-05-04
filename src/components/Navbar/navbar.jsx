import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <li>
            <Link to="/login" title="lpgin">
            <button className={styles.btn}>LogIn</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export { Navbar };
