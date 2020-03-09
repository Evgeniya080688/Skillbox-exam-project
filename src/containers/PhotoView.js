import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeImageAction } from '../store/actions'

import { unsplash } from '../services/unsplash';

import PhotoCard from '../components/photos/PhotoCard';
import Like from '../components/buttons/Like';
import Back from '../components/buttons/Back';

let PhotoView = ( { match, history, photos } ) => {
	const photo = photos.filter(photo => photo.id === match.params.id)[0];

	const comeBack = e => {
	    e.stopPropagation()
	    history.goBack()
	 }

	return (
		<React.Fragment>
			<div className="photo-view"> 		
	            <Back comeBack = { comeBack } />
				<Like id = { photo.id } likes = { photo.likes } likeImageAction = { likeImageAction } photo = { photo } liked_by_user = { photo.liked_by_user } />
				<PhotoCard photo = { photo } />	
			</div>			    			
		</React.Fragment>
	)
}

const mapStateToProps = state => {
	const { photos } = state;
	return {
	    photos
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		likeImageAction: (photo, id) => dispatch(likeImageAction(photo, id))
	}
}

export default PhotoView = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoView);

