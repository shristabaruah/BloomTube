import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useAuth,
  useHistory,
  useLike,
  usePlaylists,
  useWatchLater,
} from "../../Contexts";
import { removeHistory } from "../../utils/history";
import { removeFromLikesHandler } from "../../utils/like";
import { removeFromPlaylistHandler } from "../../utils/playlist";
import { removeFromWatchLater } from "../../utils/watchLater";
import styles from "./horizontal-card.module.css";

const HorizontalCard = ({
  title,
  channel,
  thumbnail,
  _id,
  duration,
  playlist_id,
}) => {
  const {
    authState: { token },
  } = useAuth();

  const [isVisible, setIsVisible] = useState(false);

  const optionHandler = () => setIsVisible((prev) => !prev);

  let location = useLocation();

  const { likeDispatch } = useLike();

  const { historyDispatch } = useHistory();

  const { watchLaterDispatch } = useWatchLater();

  const { playlistDispatch } = usePlaylists();

  const removeAction = () => {
    switch (location.pathname) {
      case "/like":
        removeFromLikesHandler(_id, token, likeDispatch);
        break;
      case "/history":
        removeHistory(_id, token, historyDispatch);
        break;
      case "/watchLater":
        removeFromWatchLater(_id, token, watchLaterDispatch);
        break;
      default:
        removeFromPlaylistHandler(playlist_id, token, _id, playlistDispatch);
        break;
    }
  };
  return (
    <article className={styles.card_container}>
      {isVisible && (
        <div className={styles.menu}>
          <button
            onClick={() => {
              removeAction(_id);
              setIsVisible(false);
            }}
          >
            <i class="fa-solid fa-trash-can"></i>
            Remove
          </button>
        </div>
      )}

      <Link to={`/videoPlay/${_id}`}>
        <div className={styles.video_container}>
          <img src={thumbnail} alt="placeholder" className="responsive-img" />
          <span>{duration}</span>
        </div>
      </Link>

      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <h5>{channel}</h5>
      </div>
      <button className={` ${styles.option}`} onClick={optionHandler}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </article>
  );
};
export { HorizontalCard };
