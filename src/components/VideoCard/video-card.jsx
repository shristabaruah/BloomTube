import styles from "./video-card.module.css";

const VideoCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImg}>
        <img
          src="https://picsum.photos/800"
          alt=""
          className="responsive-img"
        />
      </div>
      <div className={styles.content}>
        <img
          src="https://picsum.photos/300"
          alt="avatar"
          className="avatar sm"
        />
        <div className={styles.videoInfo}>
          <h4 title="title">This is video title</h4>
          <h5 title="title">Channel Name</h5>
          <div>
            <span>2M subscribers</span>
            <span>2o4k Likes</span>
          </div>
        </div>
      </div>
    </article>
  );
};
export { VideoCard };
