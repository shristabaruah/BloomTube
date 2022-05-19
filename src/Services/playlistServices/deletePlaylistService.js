import axios from "axios";

const deletePlaylist = (token, id) => {
  return axios.delete(`/api/user/playlists/${id}`, {
    headers: { authorization: token },
  });
};

export { deletePlaylist };
