import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useLike } from "../../Contexts";
import { addToLikeHandler, removeFromLikesHandler } from "../../utils/like";
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
  const optionsHandler = () => setIsVisible((prev) => !prev);

  const { likeState, likeDispatch } = useLike();
  const {
    authState: { token },
  } = useAuth();
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

 
  return (
    <article className={styles.card} >
      <Link to={`/videoPlay/${_id}`}>
      <div className={styles.cardImg}>
        <img src={thumbnail} alt={title} className="responsive-img" />
        <span>{duration}</span>
      </div></Link>
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
            <button className="btn btn-primary">
              <i className="fa-solid fa-clock"></i> Add to Watch Later
            </button>
            <button className="btn btn-primary">
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
