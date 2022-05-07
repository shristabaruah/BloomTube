import axios from "axios";

const SignupService = (user) => {
  return axios.post("/api/auth/signup", user);
};
export { SignupService };
