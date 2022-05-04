import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { Navbar } from "./components/Navbar/navbar";
import { Sidebar } from "./components/Sidebar/sidebar";
import { Home } from "./pages";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navbar />
      <Sidebar />

      <Home />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
