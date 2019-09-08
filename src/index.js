import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import PhotoApp from './containers/homepage/index.js';
//import Main from './router.js';


render(
  <Provider store={store}>
    <PhotoApp />
  </Provider>,
  document.getElementById("app")
);

export default store;