import './index.css';
import React from 'react';

import PhotoItem from './PhotoItem';
import { connect } from 'react-redux';

let PhotoList = (props) => {
  const { photos, likeImageAction } = props;  

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
                  
                />
              
              )
            }
          )
        }
      </ul>
  )
}

export default PhotoList;


