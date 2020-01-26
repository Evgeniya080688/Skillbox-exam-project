import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { code } from '../../services/unsplash';

import Photos from '../../containers/Photos';
import Auth from '../../containers/Auth';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../../containers/PhotoView'

const Main = (props) => {  
	if (code) {
		return (
	    	<main>
		    	<Switch>    		
			     	<Route exact path="/" component={ Photos } />		     		
		     		<Route path="/image/:id" component={ PhotoView } />
		     		<Route component={ PageNotFound } />
		    	</Switch>
	    	</main>
	    )
     	
    } else {
	    return (
     		<main>
     			<Switch>
     				<Route path="/image/:id" component={ PhotoView } />
		     		<Route exact path="/" component={ Auth } / >
		     		<Route component={ PageNotFound } />		     		
		     	</Switch>
		    </main> 	
	    )

    } 
}

export default Main;