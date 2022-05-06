import axios from "axios";

const LoginService = (user) => {
  return axios.post("/api/auth/login", user);
};
export { LoginService };
