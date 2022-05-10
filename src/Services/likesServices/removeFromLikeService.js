import axios from "axios";

const removeFromLikeService = (id, token) => {
  return axios.delete(`/api/user/likes/${id}`, {
    headers: { authorization: token },
  });
};

export { removeFromLikeService };
