import React from 'react';
//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, unsplash } from './auth/unsplash';
import PhotoApp from './containers/homepage/index';
import UnregisterPage from './containers/authpage/index';
import Header from './components/header/index.js';
import { Switch, Route } from 'react-router-dom';
//import { getCookie, setCookie } from './helpers';

let App = () => { 
	const code = location.search.split( 'code=' )[1]; 
	
	// <main> 
	//     <Switch>
	//       <Route exact path='/' component={UnregisterPage}/>
	//       <Route path='/auth' component={PhotoApp}/>
	//     </Switch>
	// </main>   
	
	if (code) {
        return unsplash.auth.userAuthentication(code)
            .then(res => res.json())
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);
                //unsplash.photos.​ likePhoto​ (​ "kBJEJqWNtNY"​ );
                return (
                	<div>
                		<Header />
            			<Route path='/auth' component={PhotoApp}/>
            		</div>	
                )
        });
    }
    else {
    	return <div>
        	<Header />
        	<UnregisterPage />
       </div>;
    }  
	
}

export default App;