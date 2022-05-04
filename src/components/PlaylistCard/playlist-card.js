import styles from "./playlist-card.module.css";
const PlaylistCard = () => {
  return (
    <article className={`body.styles ${styles.playlist}`}>
      <div className={styles.descp}>
        <h4 className={styles.title}>Playlist Name</h4>
        <h5>Title</h5>
      </div>
      <div className={styles.image_container}>
        <img
          src="https://picsum.photos/300"
          alt=""
          className="responsive-img"
        />
        <button className={styles.delete}>
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </article>
  );
};
export { PlaylistCard };
