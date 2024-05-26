// MAIN.JSX
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/Redux/Store";
import App from "./App.jsx";
import "./Styles/Index.css";
import "./Styles/Theme.css";
import "./Styles/Normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
