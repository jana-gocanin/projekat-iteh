import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";


axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <App />
  </div>
);
