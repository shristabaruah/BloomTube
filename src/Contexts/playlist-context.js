import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../Reducer";

const PlaylistsContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
  });
  return (
    <PlaylistsContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { usePlaylists, PlaylistProvider };
