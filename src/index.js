import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./Context";
import Reducer, { initialState } from "./utils/Reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider reducer={Reducer} initialstate={initialState}>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
