import './index.css';
import React from 'react';
import { unsplash } from '../../api/unsplash';
import PhotoCard from './PhotoCard';
import { connect } from 'react-redux';

let PhotoList = (props) => {
  const { photos } = props;  

  return (
  <div className="photos"> 
    <ul className="photos__list photos-list">
      {
        photos.map((photo) => {
          const { id } = photo;
          return (
            <PhotoCard 
              key={id} 
              photo={photo} 
            />
            )
          }
        )
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


