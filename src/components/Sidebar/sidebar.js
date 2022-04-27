import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={`sidebar${styles.active}`}>
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li>
            <i class="fa-solid fa-compass"></i>
            <span>Explore</span>
          </li>
          <li>
            <i class="fa-solid fa-list"></i>
            <span>Playlist</span>
          </li>
          <li>
            <i class="fa-solid fa-clock"></i>
            <span>Watch Later</span>
          </li>
          <li>
            <i class="fa-solid fa-thumbs-up"></i>
            <span>Liked</span>
          </li>
          <li>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>History</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export { Sidebar };
