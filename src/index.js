import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import Store from "./store";
import "./index.css";
//handling loadier
const loader = document.querySelector(".loader__container");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
  <Provider store={Store}>
    <App showLoader={showLoader} hideLoader={hideLoader} />
  </Provider>,
  document.getElementById("root")
);
