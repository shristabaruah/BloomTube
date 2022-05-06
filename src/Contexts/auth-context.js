import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../Reducer";

const AuthContext = createContext({ authState: [], authDispatch: () => {} });

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: null,
    token: null,
  });

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      authDispatch({
        type: "INITIAL_CHECK",
        payload: { token, user },
      });
    } catch (error) {
      console.error("error:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
