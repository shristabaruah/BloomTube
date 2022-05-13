import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../Reducer";

const HistoryContext = createContext({
  historyState: { history: [] },
  historyDispatch: () => {},
});

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    history: [],
  });

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
