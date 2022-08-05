import styles from "./page-info.module.css";
const PageInfo = ({ pg, length, video }) => {
  return (
    <section className={styles.page_info}>
      <div className={styles.img_container}>
        <img
          src={video ? video.thumbnail : " Empty"}
          alt="list"
          className="responsive-img"
        />
      </div>
      <h3 className={styles.title}>{pg} Videos </h3>
      <div className={styles.descp}>
        <span>
          {length
            ? `${length} ${length === 1 ? "Video" : "Videos"}`
            : "No Videos"}
        </span>
      </div>
    </section>
  );
};

export { PageInfo };
