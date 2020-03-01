import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const LoadMore = ( props ) => {
	const { getPhotos, currentPage } = props;

	return (			
		<React.Fragment>
			<div className="photos__loadmore loadmore">
	            <button
	                type="submit"
	                className="btn btn-loadmore"
	                onClick = { () => {
								getPhotos();
							}	
						}	
					                
	            >
	                Загрузить еще
	            </button>
	        </div>
		</React.Fragment>	
	);
}


export default LoadMore;