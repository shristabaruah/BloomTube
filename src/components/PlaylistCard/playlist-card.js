import { useNavigate } from "react-router-dom";
import { playlist } from "../../Assets";
import { useAuth, usePlaylists } from "../../Contexts";
import { deletePlaylistHandler } from "../../utils/playlist";
import styles from "./playlist-card.module.css";

const PlaylistCard = ({ _id, title, playlistImg }) => {
  const {
    authState: { token },
  } = useAuth();

  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylists();

  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.stopPropagation();
    deletePlaylistHandler(_id, token, playlistDispatch);
  };

  const playlistHandler = () => {
    navigate(`/playlist/${_id}`);
  };
  return (
    <article
      className={`body.styles ${styles.playlist}`}
      onClick={playlistHandler}
    >
      <div className={styles.descp}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.image_container}>
        <img
          src={playlistImg ?? playlist}
          alt={title}
          className="responsive-img"
        />
        <button className={styles.delete} onClick={deleteHandler}>
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </article>
  );
};
export { PlaylistCard };
