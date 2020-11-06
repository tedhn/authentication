import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureAppStore from "./store/configureStore";
import "./locales/i18n";

import App from "./Containers/app/App";

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
