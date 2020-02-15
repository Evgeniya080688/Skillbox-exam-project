import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getMorePhotos } from '../store/actions'

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

import store from '../store/index';

class Photos extends React.Component {

	componentDidMount() {
		let countPhotos = this.props.countPhotos;    
		this.props.getPhotos(countPhotos);
		window.onscroll = function() {
           	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
     		if (window.innerHeight + scrolled >= document.body.clientHeight - 300) {		
		   		countPhotos += 18;
		    	store.dispatch(getPhotos(countPhotos));	
		    	//store.dispatch(getMorePhotos());		    
		    }
		}  
	}

	render() {		
		return (
		<React.Fragment>			
		    <div className="photos"> 	        	
		    	<PhotoList photos = { this.props.photos }  />  		
	      	</div> 		    
     	</React.Fragment> 
		)
		
	}

} 

const mapStateToProps = state => {
	return {
	    photos: state.photos,
	    currentPage: state.currentPage,
	    countPhotos: state.countPhotos,
	    
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getPhotos: (countPhotos) => dispatch(getPhotos(countPhotos)),
		getMorePhotos: () => dispatch(getMorePhotos()),
	}
}


Photos = connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

export default Photos;
