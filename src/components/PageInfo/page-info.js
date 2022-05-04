import styles from "./page-info.module.css";
const PageInfo = ({ pg }) => {
  return (
    <section className={styles.page_info}>
      <div className={styles.img_container}>
        <img
          src="https://picsum.photos/300"
          alt="list"
          className="responsive-img"
        />
        <button className={`btn btn-default ${styles.play}`}>Play</button>
      </div>
      <h3 className={styles.title}>{pg} Videos </h3>
      <div className={styles.descp}>
        <span>No videos</span>
      </div>
    </section>
  );
};

export { PageInfo };
