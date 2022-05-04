import styles from "./video-card.module.css";

const VideoCard = ({
  _id,
  title,
  channel,
  duration,
  views,
  thumbnail,
  channelAvatar,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImg}>
        <img src={thumbnail} alt={title} className="responsive-img" />
        <span>{duration}</span>
      </div>
      <div className={styles.content}>
        <img src={channelAvatar} alt={title} className="avatar sm" />
        <div className={styles.videoInfo}>
          <h4 title="title">{title}</h4>
          <h5 title="title">{channel}</h5>
          <div>
            <span>{views} subscribers</span>
            <span>{} Likes</span>
          </div>
        </div>
      </div>
    </article>
  );
};
export { VideoCard };
