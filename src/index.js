import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { StateProvider } from "./store/StateProvider";
import reducer from "./store/reducer";
import { initialState } from "./store/reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
