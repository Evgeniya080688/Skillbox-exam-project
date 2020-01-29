import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { code } from '../../services/unsplash';

import Photos from '../../containers/Photos';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../../containers/PhotoView'

const Main = (props) => {  
	return (
	    	<main>
		    	<Switch>    		
			     	<Route exact path="/" component={ Photos } />		     		
		     		<Route path="/image/:id" component={ PhotoView } />
		     		<Route component={ PageNotFound } />
		    	</Switch>
	    	</main>
	    )
}

export default Main;