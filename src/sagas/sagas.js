import { all } from "redux-saga/effects";

import * as actions from '../store/actions';
import watchAuth from './apiSaga.js';
import watchLikePhotos from './likePhotoSaga.js';
import { watchGetPhotos, watchGetMorePhotos } from './photosSaga.js';

export default function* rootSaga() {
    yield all([ 
        watchAuth(),
        watchLikePhotos(),
        watchGetPhotos(),
        watchGetMorePhotos(),
       
    ])
} 

  



