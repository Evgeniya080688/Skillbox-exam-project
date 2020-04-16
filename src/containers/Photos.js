import React from 'react';
import { connect } from 'react-redux';
import { infinityScroll } from '../services/helpers.js'

import PhotoList from '../components/photos/PhotoList';

import { unsplash } from '../services/unsplash';

class Photos extends React.Component {
	constructor (props) {
        super(props);
    }

	componentDidMount() {
		window.addEventListener('scroll', infinityScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', infinityScroll);
	}

	render() {	
		const { photos } = this.props;

		return (
			<React.Fragment>			
			    <div className = "photos"> 	        	
			    	<PhotoList photos = { photos }  />  		
		      	</div> 	
	     	</React.Fragment> 
			)	
	}

} 

const mapStateToProps = state => {
	const { photos } = state.photo;
	return {
	    photos
	}
}

export default connect(
	mapStateToProps
)(Photos);

