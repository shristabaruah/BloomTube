import styles from "./card-container.module.css";

const CardContainer = ({ children }) => {
  return <ul className={`body_style ${styles.CardContainer}`}>{children}</ul>;
};
export { CardContainer };
