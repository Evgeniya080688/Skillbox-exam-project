import React from 'react';
import { connect } from 'react-redux';
import PhotoCard from '../../components/photos/PhotoCard';

import css from './index.css';

let PhotoView = ( props ) => {
	const { id } = props;

	return (
		<main className="main-photo-card">				
			<PhotoCard id = { id }/>
			<button
	            type="button"
	            className="btn like-btn"            
	          >
	            Нравится
		    </button>			
		</main>	
	)
}

const mapStateToProps = ( state ) => {	
	const { id } = state;
	return {
		id
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