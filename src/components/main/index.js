import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../containers/Home';
import Auth from '../../containers/Auth';
import PhotoList from '../photos/PhotoList';
import PageNotFound from '../../containers/PageNotFound';
import PhotoView from '../photos/PhotoView';
import Photos from '../photos/Photos'

const Main = () => {
	//const code = location.search.split( 'code=' )[1]; 
	const code = 'bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f';  

	if (code === undefined) {
     	return (
     		<main>
		     	<Route exact path="/">
		        	<Redirect to="/auth" />
		        	<Route path="/auth" component={Auth} />
		     	</Route>
		    </main> 	
	    )
    } else {
	    return (
	    	<main>
		    	<Switch>
		     		<Route exact path="/">
			        	<Redirect to="/photos" />
			     	</Route>
		     		<Route path="/photos" component={Photos} />
		     		{/*<Route path="/photos/:id" component={PhotoView} />
		     		<Route component={PageNotFound} />*/}
		    	</Switch>
	    	</main>
	    )

    } 

  	// <main>
   //  	<Switch>
   //   		<Route exact path='/' component={Home}/>
   //   		<Route path='/auth' component={Auth}/>
   //   		<Route path='/photos' component={Home}
   //   		<Route path="/photos/:id" component={PhotoView} />
   //   		<Route component={PageNotFound} />
   //  	</Switch>
  	// </main>
}


export default Main;