import { useState } from "react";
import { useAuth, useLike } from "../../Contexts";
import { removeFromLikesHandler } from "../../utils/like";
import styles from "./horizontal-card.module.css";
const HorizontalCard = ({ title, channel, thumbnail, _id,duration }) => {
  const {
    authState: { token },
  } = useAuth();

  const { likeDispatch } = useLike();
  const [isVisible, setIsVisible] = useState(false);

  const optionHandler = () => setIsVisible((prev) => !prev);

  const removeFromLikes = (_id) => {
    removeFromLikesHandler(_id, token, likeDispatch);
  };

  return (
    <article className={styles.card_container}>
      {isVisible && (
        <div className={styles.menu}>
          <button onClick={() => removeFromLikes(_id)}>
            <i className="fa-solid fa-thumbs-down"></i> Remove from likes
          </button>
        </div>
      )}
      <div className={styles.video_container}>
        <img src={thumbnail} alt="placeholder" className="responsive-img" />
        <span>{duration}</span>
      </div>
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
