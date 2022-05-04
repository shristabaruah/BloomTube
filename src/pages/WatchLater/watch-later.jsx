import styles from "./watch-later.module.css";
import { CardWrapper, HorizontalCard, PageInfo } from "../../components";

const WatchLater = () => {
  return (
    <div className={`body_style ${styles.watch_container}`}>
      <PageInfo pg={"Watch Later"} />
      <CardWrapper>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </CardWrapper>
    </div>
  );
};

export { WatchLater };
