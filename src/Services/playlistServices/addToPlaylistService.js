import axios from "axios";

const addToPlaylist = (id, video, token) => {
  return axios.post(
    `/api/user/playlists/${id}`,
    { video },
    { headers: { authorization: token } }
  );
};

export { addToPlaylist };
