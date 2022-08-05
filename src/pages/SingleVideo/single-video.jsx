import { useState, useEffect } from "react";
import React from "react";
import ReactPlayer from "react-player/youtube";
import styles from "./single-video.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useHistory, useLike, useWatchLater } from "../../Contexts";
import { addToLikeHandler, removeFromLikesHandler } from "../../utils/like";
import { getSingleVideo } from "../../Services";
import { addToHistory, removeHistory } from "../../utils/history";
import { addTotWatchLater, removeFromWatchLater } from "../../utils/watchLater";
import { PlaylistModal } from "../../components/PlaylistModal/playlistModal";

const SingleVideo = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const [isVisible, setIsVisible] = useState();
  const [openModel, setOpenModel] = useState(false);
  const [playlistVideo, setPlaylistVideo] = useState(null);

  const { videoId } = useParams();

  const navigate = useNavigate();

  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();
  const {
    authState: { token },
  } = useAuth();

  useEffect(() => {
    getSingleVideo(setSingleVideo, videoId);
  }, []);

  const checkLikesHandler = likes.some(
    (video) => video._id === singleVideo?._id
  );
  const likeHandler = (e, _id) => {
    e.stopPropagation();
    if (token) {
      if (checkLikesHandler) {
        removeFromLikesHandler(_id, token, likeDispatch);
      } else {
        addToLikeHandler(singleVideo, token, likeDispatch);
      }
    } else {
      navigate("/login");
    }
  };

  const historyHandler = (_id) => {
    if (token) {
      const inHistory = history.some((video) => video._id === _id);
      if (inHistory) {
        removeHistory(_id, token, historyDispatch);
        addToHistory(singleVideo, token, historyDispatch);
      } else {
        addToHistory(singleVideo, token, historyDispatch);
      }
    }
  };
  const checkWatchLaterHandler = watchLater.some(
    (video) => video._id === singleVideo?._id
  );

  const watchLaterHandler = (e, _id) => {
    e.stopPropagation();

    if (token) {
      if (checkWatchLaterHandler) {
        removeFromWatchLater(_id, token, watchLaterDispatch);
      } else {
        addTotWatchLater(singleVideo, token, watchLaterDispatch);
      }
    } else {
      navigate("/login");
    }
  };

  const playlistHandler = (_id) => {
    if (token) {
      setIsVisible(false);
      setOpenModel(true);
      setPlaylistVideo(singleVideo);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={`body_style ${styles.main_container}`}>
      <div className={styles.video_wrapper}>
        {openModel && (
          <PlaylistModal
            setOpenModel={setOpenModel}
            playlistVideo={playlistVideo}
          />
        )}
        <div className={styles.react_player_container}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${singleVideo._id}`}
          controls={true}
          height="100%"
          width="100%"
          onStart={() => historyHandler(singleVideo._id)}
          playing={true}
        />
        </div>
        <div className={styles.detail_container}>
          <h4>{singleVideo.title}</h4>
          <div className={styles.video_details}>
            <span>{singleVideo.views} views</span>
            <button
              className={styles.option}
              onClick={() => setIsVisible((prev) => !prev)}
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <div
              className={`${styles.btn_container} ${
                isVisible && styles.active
              }`}
            >
              <button
                className={`btn`}
                onClick={(e) => likeHandler(e, singleVideo._id)}
              >
                <i className="fa-solid fa-thumbs-up"></i>
                {checkLikesHandler ? "Unlike" : "Like"}
              </button>
              <button
                className={`btn`}
                onClick={(e) => watchLaterHandler(e, singleVideo._id)}
              >
                <i className="fa-solid fa-clock"> </i>
                {checkWatchLaterHandler ? "Remove WatchLater" : "WatchLater"}
              </button>
              <button
                className={`btn`}
                onClick={() => playlistHandler(singleVideo._id)}
              >
                <i className="fa-solid fa-list-ul"></i> Playlist
              </button>
            </div>
          </div>
        </div>
        <div className={styles.channel_info}>
          <img
            src={singleVideo.channelAvatar}
            alt={singleVideo.channel}
            className="avatar sm"
          />
          <div className={styles.channel_detail}>
            <h4>{singleVideo.channel}</h4>
            <p className={styles.descp}>{singleVideo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SingleVideo };
