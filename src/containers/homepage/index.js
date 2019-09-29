import React from 'react';
import { connect } from 'react-redux';
import PhotoList from '../../components/photos/PhotoList';

import css from './index.css';

let PhotoApp = ( props ) => {
	const { photos } = props;

	return (
		<main className="main-listphoto">			
			<h1>Лента фото</h1>	
			<PhotoList photos = { photos }/>		
		</main>	
	)
}

const mapStateToProps = ( state ) => {	
	const { userInfo, photos } = state;
	return {
		userInfo,
		photos
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