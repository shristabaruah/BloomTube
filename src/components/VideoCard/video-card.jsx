import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLike, useWatchLater } from "../../Contexts";
import { addToLikeHandler, removeFromLikesHandler } from "../../utils/like";
import { addTotWatchLater, removeFromWatchLater } from "../../utils/watchLater";
import { PlaylistModal } from "../PlaylistModal/playlistModal";
import styles from "./video-card.module.css";

const VideoCard = ({
  _id,
  title,
  likes,
  channel,
  duration,
  views,
  thumbnail,
  channelAvatar,
  videos,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [playlistVideo, setPlaylistVideo] = useState(null);
  const optionsHandler = () => setIsVisible((prev) => !prev);

  const { likeState, likeDispatch } = useLike();
  const {
    authState: { token },
  } = useAuth();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();
  const navigate = useNavigate();

  const checkLikesHandler = likeState.likes.some((video) => video._id === _id);

  const likeHandler = (e, _id) => {
    e.stopPropagation();

    if (token) {
      const video = videos.find((video) => video._id === _id);
      if (checkLikesHandler) {
        removeFromLikesHandler(_id, token, likeDispatch);
      } else {
        addToLikeHandler(video, token, likeDispatch);
      }
    } else {
      navigate("/login");
    }
  };

  const checkWatchLaterHandler = watchLater.some((video) => video._id === _id);

  const watchLaterHandler = (e, _id) => {
    e.stopPropagation();

    if (token) {
      const video = videos.find((video) => video._id === _id);
      if (checkWatchLaterHandler) {
        removeFromWatchLater(_id, token, watchLaterDispatch);
      } else {
        addTotWatchLater(video, token, watchLaterDispatch);
      }
    } else {
      navigate("/login");
    }
  };

  const playlistHandler = (e, _id) => {
    if (token) {
      setIsVisible(false);
      setOpenModel(true);
      const video = videos.find((video) => video._id === _id);
      setPlaylistVideo(video);
    } else {
      navigate("/login");
    }
  };

  return (
    <article className={styles.card}>
      {openModel && (
        <PlaylistModal
          setOpenModel={setOpenModel}
          playlistVideo={playlistVideo}
        />
      )}
      <Link to={`/videoPlay/${_id}`}>
        <div className={styles.cardImg}>
          <img src={thumbnail} alt={title} className="responsive-img" />
          <span>{duration}</span>
        </div>
      </Link>
      <div className={styles.content}>
        {isVisible && (
          <div className={styles.menu}>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                likeHandler(e, _id);
                setIsVisible(false);
              }}
            >
              <i className="fa-regular fa-thumbs-up"></i>
              {checkLikesHandler ? "Remove Like" : "Add to Like"}
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                watchLaterHandler(e, _id);
                setIsVisible(false);
              }}
            >
              <i className="fa-solid fa-clock"></i>{" "}
              {checkWatchLaterHandler ? "Remove WatchLater" : "WatchLater"}
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => playlistHandler(e, _id)}
            >
              <i className="fa-solid fa-list-ul"></i> Add to playlist
            </button>
          </div>
        )}
        <img src={channelAvatar} alt={title} className="avatar sm" />
        <div className={styles.videoInfo}>
          <h4 title="title">{title}</h4>
          <h5 title="title">{channel}</h5>
          <div>
            <span>{views} views</span>
            <span>{likes} Likes</span>
          </div>
        </div>
        <button className={styles.options} onClick={optionsHandler}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
    </article>
  );
};
export { VideoCard };
