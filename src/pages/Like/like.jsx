import { CardWrapper, HorizontalCard, PageInfo } from "../../components";
import styles from "./like.module.css";

const LikePage = () => {
  return (
    <div className={`body_style ${styles.like_container}`}>
      <PageInfo pg={"Liked"} />
      <CardWrapper>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </CardWrapper>
    </div>
  );
};

export { LikePage };
