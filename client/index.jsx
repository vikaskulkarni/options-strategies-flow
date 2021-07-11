import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { AppCtr } from "./containers/CombinedContainers";

const rootElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <AppCtr />
  </Provider>,
  rootElement
);
