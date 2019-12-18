import './index.css';

import React from 'react';
import { Link } from 'react-router-dom'

const LoadMore = () => {

	return (			
		<React.Fragment>
			<div className="photos__loadmore loadmore">
	            <button
	                type="button"
	                className="btn loadmore-btn"			                
	            >
	                Загрузить еще
	            </button>
	        </div>
		</React.Fragment>	
	);
}


export default LoadMore;