import { useState, useEffect } from "react";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useHistory, useLike } from "../../Contexts";
import { addToLikeHandler, removeFromLikesHandler } from "../../utils/like";
import styles from "./single-video.module.css";
import { getSingleVideo } from "../../Services";
import { addToHistory, removeHistory } from "../../utils/history";
const SingleVideo = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const [isVisible, setIsVisible] = useState();

  const { videoId } = useParams();

  const navigate = useNavigate();

  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

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

  return (
    <div className={`body_style ${styles.main_container}`}>
      <div className={styles.video_wrapper}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${singleVideo._id}`}
          controls
          height="40rem"
          width="100%"
          onStart={() => historyHandler(singleVideo._id)}
        />
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
              <button className={`btn`}>
                <i className="fa-solid fa-clock"> </i>WatchLater
              </button>
              <button className={`btn`}>
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
