import axios from "axios";

const removeHistoryService = (id, token) => {
  return axios.delete(`/api/user/history/${id}`, {
    headers: { authorization: token },
  });
};

export { removeHistoryService };
