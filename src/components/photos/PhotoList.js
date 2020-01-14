import './index.css';
import React from 'react';

import PhotoItem from './PhotoItem';
import { connect } from 'react-redux';

let PhotoList = (props) => {
  const { photos, toggleLike } = props;  

  return (
      <ul className="photos__list photos-list">
        {
          photos.map((photo) => {
            const { id, urls, description, likes, user, updated_at } = photo;
            return (
              
                <PhotoItem 
                  key={ id } 
                  photo={ photo }
                  toggleLike = { toggleLike } 
                />
              
              )
            }
          )
        }
      </ul>
  )
}

export default PhotoList;


