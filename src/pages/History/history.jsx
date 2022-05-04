import { CardWrapper, HorizontalCard, PageInfo } from "../../components";
import styles from "./history.module.css";

const HistoryPage = () => {
  return (
    <div className={`body_style ${styles.history_container}`}>
      <PageInfo pg={"History"} />
      <CardWrapper>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </CardWrapper>
    </div>
  );
};
export { HistoryPage };
