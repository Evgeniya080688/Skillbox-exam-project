import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { unsplash, code, authenticationUnsplash } from '../../api/unsplash';
import { getToken } from '../../actions';

import Photos from '../../containers/Photos';
import Auth from '../../containers/Auth';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../../containers/PhotoView'

const Main = (props) => {  
	const { token } = props;

	if (code) {
		return (
	    	<main>
		    	<Switch>		    		
		     		<Route exact path="/">
			        	<Redirect to="/photos" />
			     	</Route>

		     		<Route exact path="/photos" component={ Photos } />
		     		<Route path="/photos/:id" component={ PhotoView } />
		     		{/*<Route exact path="/">
			        	<Redirect to="/auth" />
			     	</Route>
		     		<Route path="/auth" component={ PageNotFound } />*/}
		     		<Route component={ PageNotFound } />
		    	</Switch>
	    	</main>
	    )
     	
    } else {
	    return (
     		<main>
     			<Switch>
		     		<Route exact path="/" component={ Auth } / >
		     		<Route path="/auth">
			        	<Redirect to="/" />
			     	</Route>
		     		<Route component={ PageNotFound } />		     		
		     	</Switch>
		    </main> 	
	    )

    } 
}

export default Main;