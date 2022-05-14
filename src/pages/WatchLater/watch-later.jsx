import styles from "./watch-later.module.css";
import { useEffect } from "react";
import { empty } from "../../Assets";
import { CardWrapper, HorizontalCard, PageInfo } from "../../components";
import { useAuth, useWatchLater } from "../../Contexts";
import { useNavigate } from "react-router-dom";
import { getWatchLaterHandler } from "../../utils/watchLater";

const WatchLater = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      getWatchLaterHandler(token, watchLaterDispatch);
    }
  }, []);
  return (
    <div className={styles.main_container}>
      {watchLater.length > 0 ? (
        <div className={`body_style ${styles.watch_container}`}>
          <PageInfo
            pg={"Watch Later"}
            length={watchLater.length}
            video={watchLater.length ? watchLater[0] : null}
          />
          <CardWrapper>
            {watchLater.map((WatchLaterVideo) => (
              <div key={WatchLaterVideo._id}>
                <HorizontalCard {...WatchLaterVideo} />
              </div>
            ))}
          </CardWrapper>
        </div>
      ) : (
        <div className={`body_style ${styles.empty}`}>
          <img
            src={empty}
            alt="empty"
            className={`responsive-img ${styles.empty_img}`}
          />
          <h1>No Videos to Watch Later</h1>
          <button
            className={` btn primary-solid ${styles.btn}`}
            onClick={() => navigate("/")}
          >
            Explore Some videos to Watch Later
          </button>
        </div>
      )}
    </div>
  );
};

export { WatchLater };
