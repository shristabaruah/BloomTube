import styles from "./card-container.module.css";

const CardContainer = ({ children }) => {
  return <ul className={styles.CardContainer}>{children}</ul>;
};
export { CardContainer };
