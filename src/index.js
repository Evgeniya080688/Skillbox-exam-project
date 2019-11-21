import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "./store/index.js";
import App from './containers/App.js';

// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

// const store = createStore(reducers, applyMiddleware(thunk))

render(
	<Provider store={store}>
    	<Router>
	  		<App />
	  	</Router>
  	</Provider>,
	document.getElementById("app")
);



export default store;