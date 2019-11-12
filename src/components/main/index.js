import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Photos from '../../containers/Photos';
import Auth from '../../containers/Auth';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../../containers/PhotoView'

const Main = (props) => {
	//const code = location.search.split( 'code=' )[1]; 
	//const token = 'bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f';  
	const { isAuthorizated } = props;

	if (isAuthorizated == 'false') {
     	return (
     		<main>
		     	<Route exact path="/" component={ Auth } / >
		    </main> 	
	    )
    } else {
	    return (
	    	<main>
		    	<Switch>
		     		{/*<Route exact path="/">
			        	<Redirect to="/photos" />
			     	</Route>
		     		<Route exact path="/photos" component={ Photos } />
		     		<Route path="/photos/:id" component={ PhotoView } />*/}
		     		<Route path="/auth" component={ PageNotFound } />
		    	</Switch>
	    	</main>
	    )

    } 
}


export default Main;