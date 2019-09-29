import './index.css';
import React from 'react';
import { unsplash } from '../../api/unsplash';
import Photo from './Photo';

const PhotoCard = (props) => {
	const { id, url, description, likes, user, date  } = props;
	return (	
			<figure className="photo-card">
			    
		        <Photo src={ url } description={ description } />
		         
			    <figcaption className="photo-card__info">
			    	<span>Автор <a href='#'>{user}</a></span>
			    	<span>дата {date}</span>
			    	<span>{ likes }</span>
			    </figcaption>
		   	</figure>
	);
}

export default PhotoCard;