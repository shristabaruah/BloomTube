import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../Contexts";
import { usePlaylists } from "../../Contexts/playlist-context";
import {
  addToPlaylistHandler,
  newPlayListHandler,
  removeFromPlaylistHandler,
} from "../../utils/playlist";
import styles from "./playlistModal.module.css";

const PlaylistModal = ({ setOpenModel, playlistVideo }) => {
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [playlistData, setPlaylistData] = useState({ title: "" });

  const {
    authState: { token },
  } = useAuth();

  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylists();

  const cancelBtnHandler = () => {
    setCreatePlaylist(false);
    setPlaylistData((prev) => ({ ...prev, title: "" }));
  };

  const createPlaylistBtnHandler = () => {
    if (playlistData.title) {
      newPlayListHandler(
        token,
        playlistData,
        setCreatePlaylist,
        setPlaylistData,
        playlistDispatch
      );
    } else {
      toast.error("Title cannot be empty");
    }
  };

  const checkVideo = (_id) => {
    const isPlaylist = playlists.find((playlist) => playlist._id === _id);
    const isVideo = isPlaylist.videos.some(
      (video) => video._id === playlistVideo._id
    );
    return isVideo;
  };

  const playlistVideoHandler = (_id) => {
    if (checkVideo(_id)) {
      removeFromPlaylistHandler(
        _id,
        token,
        playlistVideo._id,
        playlistDispatch
      );
    } else {
      addToPlaylistHandler(token, _id, playlistVideo, playlistDispatch);
    }
  };

  const modalOpen = (e) => {
    e.stopPropagation();
    setOpenModel((prev) => !prev);
  };
  return (
    <>
      <div className={styles.modal_container} onClick={modalOpen}></div>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h3>Playlist</h3>
        {!createPlaylist && (
          <>
            {playlists.length > 0 ? (
              <ul className={styles.playlist_container}>
                {playlists.map((playlist) => (
                  <li className={styles.input_container} key={playlist._id}>
                    <input
                      type="checkbox"
                      name={playlist.name}
                      id={playlist._id}
                      checked={checkVideo(playlist._id)}
                      onChange={() => playlistVideoHandler(playlist._id)}
                    />
                    <label htmlFor={playlist._id}>{playlist.title}</label>
                  </li>
                ))}
              </ul>
            ) : null}
            <button
              className={`btn ${styles.modal_btn}`}
              onClick={(e) => {
                e.stopPropagation();
                setCreatePlaylist(true);
              }}
            >
              <i class="fa-solid fa-plus"></i>
              Create New Playlist
            </button>
          </>
        )}
        {createPlaylist && (
          <div className={styles.new_playlist}>
            <input
              type="text"
              name="title"
              placeholder="Start Typing..."
              value={playlistData.title}
              onChange={(e) =>
                setPlaylistData({ ...playlistData, title: e.target.value })
              }
            />
            <div className={styles.btn_container}>
              <button
                className={`btn ${styles.cancel_btn}`}
                onClick={cancelBtnHandler}
              >
                Cancel
              </button>
              <button
                className={`btn ${styles.playlist_btn}`}
                onClick={createPlaylistBtnHandler}
              >
                Create
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { PlaylistModal };
