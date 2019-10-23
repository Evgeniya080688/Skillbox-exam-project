import './index.css';
import React from 'react';

import PhotoCard from './PhotoCard';
import { connect } from 'react-redux';

let PhotoList = (props) => {
  const { photos } = props;  

  return (
      <ul className="photos__list photos-list">
        {
          photos.map((photo) => {
            const { id } = photo;
            return (
              <li className="photos-list__item photo-item">
                <PhotoCard 
                  key={id} 
                  photo={photo} 
                />
              </li>
              )
            }
          )
        }
      </ul>
  )
}



const mapStateToProps = state => {
  return {
    photos: state.photoList.photos,
    currentPage: state.photoList.currentPage,
    token: state.auth.token
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    
  }
}

PhotoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);

export default PhotoList;


