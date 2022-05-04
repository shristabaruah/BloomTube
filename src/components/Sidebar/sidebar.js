import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/" title="Explore">
            <i class="fa-solid fa-compass"></i>
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link to="/playlist" title="playlist">
            <i class="fa-solid fa-list"></i>
            <span>Playlist</span>
          </Link>
        </li>
        <li>
          <Link to="/watchLater" title="Watch Later">
            <i class="fa-solid fa-clock"></i>
            <span>Watch Later</span>
          </Link>
        </li>
        <li>
          <Link to="/like" title="Like">
            <i class="fa-solid fa-thumbs-up"></i>
            <span>Liked</span>
          </Link>
        </li>
        <li>
          <Link to="/history" title="History">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>History</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};
export { Sidebar };
