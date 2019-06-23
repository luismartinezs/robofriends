import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchRobots } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
