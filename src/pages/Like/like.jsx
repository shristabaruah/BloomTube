import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { empty } from "../../Assets";
import { CardWrapper, HorizontalCard, PageInfo } from "../../components";
import { useAuth, useLike } from "../../Contexts";
import { getLikesHandler } from "../../utils/like";
import styles from "./like.module.css";

const LikePage = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    likeState: { likes },
    likeDispatch,
  } = useLike();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getLikesHandler(token, likeDispatch);
    }
  }, []);
  return (
    <div className={styles.main_container}>
      {likes.length > 0 ? (
        <div className={`body_style ${styles.like_container}`}>
          <PageInfo
            pg={"Liked"}
            length={likes.length}
            video={likes.length ? likes[0] : null}
          />
          <CardWrapper>
            {likes.map((likedVideo) => (
              <div key={likedVideo._id}>
                <HorizontalCard {...likedVideo} />
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
          <h1>No liked Videos</h1>
          <button
            className={` btn primary-solid ${styles.btn}`}
            onClick={() => navigate("/")}
          >
            Like Some videos
          </button>
        </div>
      )}
    </div>
  );
};

export { LikePage };
