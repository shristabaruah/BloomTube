import axios from "axios";

const addToLikeService = (video, token) => {
  return axios.post(
    "/api/user/likes",
    { video },
    { headers: { authorization: token } }
  );
};
export { addToLikeService };
