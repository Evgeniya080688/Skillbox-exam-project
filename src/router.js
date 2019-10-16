  
import React from 'react';
//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, unsplash } from './api/unsplash';
import Home from './containers/homepage/index';
import Auth from './containers/authpage/index';
import Header from './components/header/index.js';
import { Switch, Route } from 'react-router-dom';
import './style.css';

let App = ( props ) => { 
	//const code = location.search.split( 'code=' )[1]; 
	const code = 'bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f'; 
	
	if (code === undefined) {
    return (
    	<div>
    		<Header />
    		<Auth />
    		//<Route path="/auth" component={Auth} />
    	</div>
      
    )
  } else {
    return (
      <div>
      	<Header />
        <Route exact path="/*" component={Home}  />
      </div>
    )
  }

	
}

export default App;

