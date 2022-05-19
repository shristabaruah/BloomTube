import { useEffect } from "react";
import { PlaylistCard } from "../../components";
import { useAuth, usePlaylists } from "../../Contexts";
import { getPlaylistHandler } from "../../utils/playlist";
import styles from "./playlist.module.css";

const Playlist = () => {
  const {
    authState: { token },
  } = useAuth();

  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylists();

  useEffect(() => {
    if (token) {
      getPlaylistHandler(token, playlistDispatch);
    }
  }, [token, playlistDispatch]);

  return (
    <div className="body_style">
      <ul className={styles.playlist_container}>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div key={playlist._id}>
              <PlaylistCard {...playlist} />
            </div>
          ))
        ) : (
          <div className={styles.empty_playlist}>
            <h2>There is no playlist</h2>
          </div>
        )}
      </ul>
    </div>
  );
};

export { Playlist };
