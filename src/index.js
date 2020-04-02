import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "./store/index.js";
import App from './App.js';
import { unsplash, code } from './services/unsplash';
import { getCookie, setCookie } from './services/helpers';

render(
	<Provider store={store}>
    	<Router>
	  		<App />
	  	</Router>
  	</Provider>,
	document.getElementById("app")
);



export default store;