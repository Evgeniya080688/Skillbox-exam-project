import './index.css';
import React from 'react';
import { unsplash } from '../../api/unsplash';
import PhotoItem from './PhotoItem';

let PhotoList = (props) => {
  const { photos } = props;  

  return (
  <div className="photos"> 
    <ul className="photos__list photos-list">
      {
        photos.map((photo) => {
          const { id, url, description, likes, user, date } = photo;
          return (
            <PhotoItem  
              key = { id }
              url = { url }
              description = { description }
              likes = { likes }
              user = { user }
              date = { date }           
          /> 
          )
        })
      }
    </ul>

    <div className="photos__loadmore loadmore">
          <button
            type="button"
            className="btn loadmore-btn"
            
          >
            Загрузить еще
          </button>
    </div>
  </div> 
  )
}

export default PhotoList;


