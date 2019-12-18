import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PhotoCard from '../components/photos/PhotoCard';
import Like from '../components/buttons/Like';
import Back from '../components/buttons/Back';

let PhotoView = ( { match, history, photos, token } ) => {
	const photo = photos.filter(photo => photo.id === match.params.id)[0]

	return (
		<React.Fragment>
			<PhotoCard photo = { photo } />				
			<Like />
			<Back />		    			
		</React.Fragment>
	)
}

const mapStateToProps = state => {
  return {
    photos: state.photoList.photos,
    token: state.auth.token,
  }
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		
	}
}

PhotoView = connect(
	mapStateToProps,
	mapDispatchToProps
)(PhotoView);

export default PhotoView;