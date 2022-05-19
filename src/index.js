import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider, HistoryProvider, LikeProvider } from "./Contexts";
import { WatchLaterProvider } from "./Contexts/watchLater-context";
import { PlaylistProvider } from "./Contexts/playlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlaylistProvider>
          <WatchLaterProvider>
            <HistoryProvider>
              <LikeProvider>
                <App />
              </LikeProvider>
            </HistoryProvider>
          </WatchLaterProvider>
        </PlaylistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
