import './index.css';
import React from 'react';

import { Link } from 'react-router-dom'

const PhotoCard = ({photo}) => {
	const { id, urls, description, likes, user, updated_at } = photo;

	return (			
		<figure className="photo-item__image">
		    <Link to={{ pathname: `/photo/${id}` }}>
	         	<img alt={description} src={urls.thumb} />
	        </Link>
		    <figcaption className="photo-item__caption">
		    	<span> Photo by&nbsp;
        			<a href={user.links.html}>{user.name}</a> on
        			<a href="https://unsplash.com/">&nbsp;Unsplash</a></span>
		    	<span>{updated_at}</span>
		    	<span>{ likes }</span>
		    </figcaption>
	   	</figure>	
	);
}


export default PhotoCard;