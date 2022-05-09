import axios from "axios";

const getLikeService = (token) => {
  return axios.get("/api/user/likes", { headers: { authorization: token } });
};
export { getLikeService };
