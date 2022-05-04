import styles from "./playlist.module.css";
import { CardWrapper, HorizontalCard, PageInfo } from "../../components";

const Playlist = () => {
  return (
    <div className={`body_style ${styles.playlist_container}`}>
      <PageInfo pg={"Playlist"} />

      <CardWrapper>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </CardWrapper>
    </div>
  );
};
export { Playlist };
