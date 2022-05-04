import styles from "./card-wrapper.module.css";

const CardWrapper = ({ children }) => {
  return <ul className={styles.card_wrapper}> {children} </ul>;
};

export { CardWrapper };
