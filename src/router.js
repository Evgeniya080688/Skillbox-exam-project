import React from 'react';
//import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken, unsplash } from './api/unsplash';
import PhotoApp from './containers/homepage/index';
import UnregisterPage from './containers/authpage/index';
import Header from './components/header/index.js';
import { Switch, Route } from 'react-router-dom';
import './style.css';
//import { changeSettingsAction, setMyInfoAction } from './actions/index';


let App = ( props ) => { 
	const code = location.search.split( 'code=' )[1]; 
	const { userInfo, photos } = props; 
	
	if (code) {
        return unsplash.auth.userAuthentication(code)
            .then(res => res.json())
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);
                //unsplash.photos.​ likePhoto​ (​ "kBJEJqWNtNY"​ );
                return (
                	<div>
                		<Header userInfo = {userInfo}/>
            			//<Route path='/auth' component={PhotoApp}/>
            			<Route exact path="/*" render={(ev) => <PhotoApp photos={photos} /> } />
            		</div>	
                )
        });
    }
    else {
    	return <div>
        	<Header userInfo = {userInfo}/>
        	<PhotoApp photos={photos} />
        	<UnregisterPage />
       </div>;
    }  
	
}

export default App;