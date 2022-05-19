import { toast } from "react-toastify";
import {
  addToPlaylist,
  createPlaylist,
  deletePlaylist,
  getPlaylist,
  removeFromPlaylist,
} from "../Services";

const addToPlaylistHandler = async (token, _id, video, playlistDispatch) => {
  try {
    const response = await addToPlaylist(_id, video, token);
    if (response.status === 201) {
      toast.success("Added to Playlist");
      playlistDispatch({
        type: "ADD_VIDEO",
        payload: { playlist: response.data.playlist },
      });
    }
  } catch (error) {
    console.error("error", error);
  }
};

const deletePlaylistHandler = async (_id, token, playlistDispatch) => {
  try {
    const response = await deletePlaylist(token, _id);
    if (response.status === 200) {
      toast.success("Deleted playlist");
      playlistDispatch({
        type: "REMOVE_PLAYLIST",
        payload: response.data.playlists,
      });
    }
  } catch (error) {
    console.error("error", error);
  }
};

const getPlaylistHandler = async (token, playlistDispatch) => {
  try {
    const response = await getPlaylist(token);
    if (response.status === 200) {
      playlistDispatch({
        type: "GET_PLAYLIST",
        payload: response.data.playlists,
      });
    }
  } catch (error) {
    console.error("error", error);
  }
};

const newPlayListHandler = async (
  token,
  playlist,
  setCreatePlaylist,
  setPlaylistData,
  playlistsDispatch
) => {
  try {
    const response = await createPlaylist(playlist, token);
    if (response.status === 201) {
      setCreatePlaylist(false);
      setPlaylistData((prev) => ({ ...prev, title: "" }));
      playlistsDispatch({
        type: "ADD_PLAYLIST",
        payload: response.data.playlists,
      });
    }
  } catch (error) {
    console.error("error", error);
  }
};

const removeFromPlaylistHandler = async (
  playlist_id,
  token,
  videoId,
  playlistDispatch
) => {
  try {
    const response = await removeFromPlaylist(playlist_id, videoId, token);
    if (response.status === 200) {
      toast.success("Remove from Playlist");
      playlistDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: { playlist: response.data.playlist },
      });
    }
  } catch (error) {
    console.error("error", error);
  }
};

export {
  addToPlaylistHandler,
  getPlaylistHandler,
  removeFromPlaylistHandler,
  deletePlaylistHandler,
  newPlayListHandler,
};
