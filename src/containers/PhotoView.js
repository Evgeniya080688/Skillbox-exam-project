import React from 'react';
import { connect } from 'react-redux';

import PhotoCard from '../components/photos/PhotoCard';
import Like from '../components/buttons/Like';
import Back from '../components/buttons/Back';

let PhotoView = ( { match, history, photos } ) => {
	const photo = photos.filter(photo => photo.id === match.params.id)[0];
	const { id, likes, liked_by_user } = photo;

	const comeBack = e => {
	    e.stopPropagation()
	    history.goBack()
	 }

	return (
		<React.Fragment>
			<div className="photo-view"> 		
	            <Back comeBack = { comeBack } />
				<Like id = { id } likes = { likes } liked_by_user = { liked_by_user } photo = { photo }/>
				<PhotoCard photo = { photo } />	
			</div>			    			
		</React.Fragment>
	)
}

const mapStateToProps = state => {
	const { photos } = state.photo;
	return {
	    photos
	}
}


export default connect(
	mapStateToProps
)(PhotoView);

