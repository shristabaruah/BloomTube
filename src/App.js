import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar, RequiresAuth, Sidebar } from "./components";
import {
  HistoryPage,
  Home,
  LikePage,
  Login,
  Playlist,
  SignUp,
  WatchLater,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <Sidebar />
      ) : null}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/like"
          element={
            <RequiresAuth>
              <LikePage />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchLater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
