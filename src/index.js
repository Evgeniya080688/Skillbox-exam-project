import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

// ES Modules syntax
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "{711d5fa98592f3057ed538ca1ac6134ad6d8684023a8d56d71b57ec7577658bc}",
  secret: "{bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f}"
});


render(
  <Provider store={store}>
    <unsplash />
  </Provider>,
  document.getElementById("app")
);

export default store;