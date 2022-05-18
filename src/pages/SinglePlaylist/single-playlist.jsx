import styles from "./single-playlist.module.css";
import { CardWrapper, HorizontalCard, PageInfo } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { usePlaylists } from "../../Contexts";
import { empty } from "../../Assets";

const SinglePlaylist = () => {
  const params = useParams();

  const navigate = useNavigate();

  const {
    playlistState: { playlists },
  } = usePlaylists();

  const presentPlaylist = playlists.find(
    (playlist) => playlist._id === params._id
  );

  return (
    <div className={styles.container}>
      {presentPlaylist.videos.length > 0 ? (
        <div className={`body_style ${styles.playlist_container}`}>
          <PageInfo
            pg={presentPlaylist.title}
            length={presentPlaylist.videos.length}
            video={
              presentPlaylist.videos.length ? presentPlaylist.videos[0] : null
            }
          />

          <CardWrapper>
            {presentPlaylist.videos.map((playlistVideo) => (
              <div key={playlistVideo._id}>
                <HorizontalCard
                  {...playlistVideo}
                  playlist_id={presentPlaylist._id}
                />
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
          <h1>{presentPlaylist.title} Playlist is empty</h1>
          <button
            className={` btn primary-solid ${styles.btn}`}
            onClick={() => navigate("/")}
          >
            Watch Some videos
          </button>
        </div>
      )}
    </div>
  );
};
export { SinglePlaylist };
