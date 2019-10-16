import React from 'react';
import { connect } from 'react-redux';
import PhotoList from '../../components/photos/PhotoList';

import css from './index.css';

let Home = ( props ) => {
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


Home = connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

export default Home;