import axios from "axios";

const createPlaylist = (playlist, token) => {
  return axios.post(
    "/api/user/playlists",
    { playlist },
    {
      headers: { authorization: token },
    }
  );
};

export { createPlaylist };
