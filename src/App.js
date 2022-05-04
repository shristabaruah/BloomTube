import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import {
  HistoryPage,
  Home,
  LikePage,
  Login,
  Playlist,
  SignUp,
  WatchLater,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </>
  );
}

export default App;
