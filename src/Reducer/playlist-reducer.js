const playlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "ADD_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "REMOVE_PLAYLIST":
      return { ...state, playlists: action.payload };

    case "ADD_VIDEO":
      const newPlaylist = (playlists) =>
        playlists.map((playlist) =>
          playlist._id === action.payload.playlist._id
            ? action.payload.playlist
            : playlist
        );
      return { ...state, playlists: newPlaylist(state.playlists) };

    case "DELETE_FROM_PLAYLIST":
      const checkPlaylist = (playlists) =>
        playlists.map((playlist) =>
          playlist._id === action.payload.playlist._id
            ? action.payload.playlist
            : playlist
        );

      return { ...state, playlists: checkPlaylist(state.playlists) };
    default:
      return state;
  }
};
export { playlistReducer };
