import axios from "axios";

const removeFromWatchLaterService = (id, token) => {
  return axios.delete(`/api/user/watchlater/${id}`, {
    headers: { authorization: token },
  });
};
export { removeFromWatchLaterService };
