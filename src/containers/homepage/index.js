import React from 'react';
import { connect } from 'react-redux';
import UnregisterPage from '../authpage/index.js';
import { unsplash, getToken } from '../../auth/unsplash';
import Header from '../../components/header/index.js';

import css from './index.css';

let PhotoApp = ( props ) => {

	return (
		<div>			
			<h1>Здесь будет лента фото</h1>
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