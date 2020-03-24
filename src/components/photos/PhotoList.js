import './index.css';
import React from 'react';

import PhotoItem from './PhotoItem';
import { connect } from 'react-redux';

let PhotoList = (props) => {
  const { photos, likeImageAction, getCurrentPhoto } = props;  

  return (
      <ul className="photos__list photos-list">
        {
          photos.map((photo) => {
            const { id } = photo;
            return (
              
                <PhotoItem 
                  key={ id } 
                  photo={ photo }
                  likeImageAction = { likeImageAction }
                  getCurrentPhoto = { getCurrentPhoto }
                />
              
              )
            }
          )
        }
      </ul>
  )
}

export default PhotoList;


