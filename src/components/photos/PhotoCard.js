import './index.css';
import React from 'react';
import { unsplash } from '../../api/unsplash';
import { Link } from 'react-router-dom'
import Photo from './Photo';

const PhotoCard = ({photo}) => {
	const { id, urls, description, likes, user, updated_at } = photo;

	return (	
		<li className="photos-list__item photo-item">
			<figure className="photo-item__image">
			    <Link to={{ pathname: `/photo/${id}` }}>
		         	<Photo src={ urls.thumb } description={ description } />
		        </Link>
			    <figcaption className="photo-item__caption">
			    	<span> Photo by&nbsp;
            			<a href={user.links.html}>{user.name}</a> on
            			<a href="https://unsplash.com/">&nbsp;Unsplash</a></span>
			    	<span>{updated_at}</span>
			    	<span>{ likes }</span>
			    </figcaption>
		   	</figure>	
		</li>
	);
}


export default PhotoCard;