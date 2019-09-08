import React from 'react';
import { connect } from 'react-redux';
import UnregisterPage from '../authpage/index.js';
import { unsplash, getToken } from '../../auth/unsplash';

import css from './index.css';

let PhotoApp = ( props ) => {

	return (
		<div>
			<h1>Unplash app</h1>			
			if (!window.location.search.split('code=')[1]) {
		       <UnregisterPage />
		    }
		    else {
		    	//getToken(unsplash, window.location.search.split('code=')[1])	        
		    }

		</div>	
	)
}

const mapStateToProps = ( state ) => {	
	return {
		state: state,
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {

	}
}

PhotoApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoApp);

export default PhotoApp;