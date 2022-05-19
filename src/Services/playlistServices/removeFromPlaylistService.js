import axios from "axios";

const removeFromPlaylist = (playlist_id, videoId, token) => {
  return axios.delete(`/api/user/playlists/${playlist_id}/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromPlaylist };
