import axios from "axios";

const getPlaylist = (token) => {
  return axios.get("/api/user/playlists", {
    headers: { authorization: token },
  });
};

export { getPlaylist };
