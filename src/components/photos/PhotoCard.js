import './index.css';
import React from 'react';

import { Link } from 'react-router-dom'

const PhotoCard = ({photo}) => {

	const { updated_at, user, urls, location, likes } = photo

	return (			
		<React.Fragment>
			<div class="view-picture">				
				<img alt={location} src={urls.regular} />
			</div>		
			<div class="view-info">
				<span>
					photo by&nbsp;
              		<a href={user.links.html}>{user.name}</a> on
              		<a href="https://unsplash.com/">&nbsp;Unsplash</a>
				</span>
		    	<span>дата {updated_at}</span>
		    	<span>{ likes }</span>
			</div>	
		</React.Fragment>	
	);
}


export default PhotoCard;