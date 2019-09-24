import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "./store/index.js";
import App from './router.js';
import PhotoApp from './containers/homepage/index';

render(
	<Provider store={store}>
	  	<Router>
	  		<Route exact path="*" render={ (ev)=><App routeLocation={ev} /> } />
	  	</Router>
	</Provider>,
	document.getElementById("app")
);



export default store;