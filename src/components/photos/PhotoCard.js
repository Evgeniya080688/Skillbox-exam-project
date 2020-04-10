import './index.css';
import React from 'react';

import { Link } from 'react-router-dom'

import { convertDate } from '../../services/helpers'; 
import { unsplushUrl } from '../../services/constants';

const PhotoCard = ({ photo }) => {
	const { id, updated_at, user, urls, location, likes } = photo;
	const date = convertDate( updated_at );

	return (			
		<React.Fragment>
			<div className="view-info">
				<span>
					photo by&nbsp;
              		<a href={ user.links.html }>{ user.name }</a> on
              		<a href={ unsplushUrl }>&nbsp;Unsplash</a>
				</span>
		    	<span>{ date }</span>		    	
			</div>	
			<div className="view-picture">				
				<img alt={ location } src={ urls.regular } />
			</div>				
		</React.Fragment>	
	);
}


export default PhotoCard;