import styles from "./horizontal-card.module.css";
const HorizontalCard = () => {
  return (
    <article className={styles.card_container}>
      <div className={styles.video_container}>
        <img
          src="https://picsum.photos/300"
          alt="placeholder"
          className="responsive-img"
        />
        <span>13:00</span>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>Video Titleee </h4>
        <h5>Channel-Name</h5>
      </div>
      <button className={` ${styles.option}`}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </article>
  );
};
export { HorizontalCard };
