import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import Store from "./store";
import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
