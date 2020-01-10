import './index.css';
import React from 'react';

import { Link } from 'react-router-dom';

import Like from '../buttons/Like';
import { convertDate, toggleClassLike } from '../../services/helpers';
import { unsplash } from '../../services/unsplash';

const PhotoItem = ( props ) => {	
	const { photo, toggleLike } = props;
	const { id, urls, description, likes, user, updated_at } = props.photo;
	const date = convertDate( updated_at );

	return (	
		<li className="photos-list__item photo-item" >		
			<figure className="photo-item__figure">
				<div className="photo-item__picture">
					<Link to={{ pathname: `/image/${id}` }}>
		         		<img alt={description} src={urls.thumb} />
		        	</Link>
				</div>			   
			    <figcaption className="photo-item__caption">
			    	<span> Photo by&nbsp;
	        			<a href={user.links.html}>{user.name}</a> on
	        			<a href="https://unsplash.com/">&nbsp;Unsplash</a></span>
			    	<span> { date } </span>
			    	<Like toggleLike = { toggleLike } id = { id } unsplash = { unsplash }  likes = { likes } />					
			    </figcaption>
		   	</figure>	
		</li>
	);
}


export default PhotoItem;