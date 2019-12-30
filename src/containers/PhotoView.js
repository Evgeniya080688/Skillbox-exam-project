import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { unsplash } from '../services/unsplash';
import { toggleLike } from '../store/actions'

import PhotoCard from '../components/photos/PhotoCard';
import Like from '../components/buttons/Like';
import Back from '../components/buttons/Back';

let PhotoView = ( { match, history, photos, token } ) => {
	const photo = photos.filter(photo => photo.id === match.params.id)[0]

	return (
		<React.Fragment>
			<PhotoCard photo = { photo } />				
			<Like toggleLike = { toggleLike } id = { photo.id } unsplash = { unsplash }/>
			<Back />		    			
		</React.Fragment>
	)
}

const mapStateToProps = state => {
	const {token, photos, currentPage} = state;
	return {
	    photos
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		toggleLike : ( unsplash, photo ) => dispatch(toggleLike ( unsplash, photo ))
	}
}

PhotoView = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoView);

export default PhotoView;