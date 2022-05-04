import { CardContainer, VideoCard } from "../components";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <CardContainer>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

      </CardContainer>
    </div>
  );
};
export { Home };
