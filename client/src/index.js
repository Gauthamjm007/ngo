import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { startGetNgo } from "./actions/ngo";
import App from "./App";
const store = configStore();

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(startGetNgo());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
