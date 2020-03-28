import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPhotos, getMorePhotos, likeImageAction, getCurrentPhoto, loadingControl } from '../store/actions';

import PhotoList from '../components/photos/PhotoList';
import LoadMore from '../components/buttons/LoadMore';

import store from '../store/index';
import { unsplash } from '../services/unsplash';

class Photos extends React.Component {
	constructor (props) {
        super(props);
    }

    componentWillUnmount() {

    }

	componentDidMount() {
		window.addEventListener('scroll', function() {
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (window.innerHeight + scrolled >= document.body.clientHeight - 300) {
       			const loadingPhotos = store.getState().loadingPhotos;
                if (!loadingPhotos) {
                	//alert('Загружаю...');
                	store.dispatch(loadingControl());
                	store.dispatch(getMorePhotos());		    
                }
              
            }
		} );	
	}


	render() {	
		const { photos, likeImageAction, getMorePhotos, getCurrentPhoto } = this.props;

		return (
			<React.Fragment>			
			    <div className="photos"> 	        	
			    	<PhotoList photos = { photos }  likeImageAction = { likeImageAction }  getCurrentPhoto = { getCurrentPhoto } />  		
		      	</div> 	
	     	</React.Fragment> 
			)
	
		
	}

} 

const mapStateToProps = state => {
	return {
	    photos: state.photos,
	    token: state.token,
	    loadingPhotos: state.loadingPhotos
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		getPhotos: () => dispatch(getPhotos()),
		getMorePhotos: () => dispatch(getMorePhotos()),
		likeImageAction: (photo, id) => dispatch(likeImageAction(photo, id)),
		getCurrentPhoto: (photo) => dispatch(getCurrentPhoto(photo)),
		loadingControl: () => dispatch(loadingControl())
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Photos);

