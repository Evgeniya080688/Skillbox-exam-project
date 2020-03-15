import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Photos from '../../containers/Photos';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../../containers/PhotoView';
import Home from '../../containers/Home';

const Main = (props) => {  
	return (
	    	<main>
		    	<Switch>
  					<Route path = "/home/" component = { Home } />
			     	<Route exact path="/" component={ Photos } />		     		
		     		<Route path="/image/:id" component={ PhotoView } />
		     		<Route component={ PageNotFound } />
		    	</Switch>
	    	</main>
	    )
}

export default Main;