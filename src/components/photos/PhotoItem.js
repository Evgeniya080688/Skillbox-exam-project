import './index.css';
import React from 'react';
import { unsplash } from '../../api/unsplash';
import Photo from './Photo';

const PhotoItem = (props) => {
	const { id, url, description, likes, user, date  } = props;
	return (
		<li className="photos-list__item photo-item">
			<figure className="photo-item__image">
			    
		        <Photo src={ url } description={ description } />
		         
			    <figcaption className="photo-item__caption">
			    	<span>Автор <a href='#'>{user}</a></span>
			    	<span>дата {date}</span>
			    	<span>{ likes }</span>
			    </figcaption>
		   	</figure>	
		</li>
	);
}

export default PhotoItem;