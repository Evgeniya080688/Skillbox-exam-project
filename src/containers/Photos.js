import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getMorePhotos } from '../store/actions'

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

class Photos extends React.Component {

	componentDidMount() {
		this.props.getPhotos();
	}

	render() {		
		window.onscroll = function() {
           	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
     		if (window.innerHeight + scrolled >= document.body.clientHeight - 300) {		
		    	this.props.getMorePhotos();		    
		    }
		}        
		return (
		<React.Fragment>			
		    <div className="photos"> 	        	
		    	<PhotoList photos = { this.props.photos }  />  		
		        <LoadMore getMorePhotos = { this.props.getMorePhotos } currentPage = { this.props.currentPage }/>
	      	</div> 		    
     	</React.Fragment> 
		)
		
	}

} 

const mapStateToProps = state => {
	return {
	    photos: state.photos,
	    currentPage: state.currentPage
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getPhotos: () => dispatch(getPhotos()),
		getMorePhotos: () => dispatch(getMorePhotos()),
	}
}


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
