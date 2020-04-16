import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "./store/index.js";
import App from './App.js';

render(
	<Provider store={store}>
    	<Router>
	  		<App />
	  	</Router>
  	</Provider>,
	document.getElementById("app")
);



export default store;