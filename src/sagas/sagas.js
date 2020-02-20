import { takeEvery, call, put, all, select, take } from "redux-saga/effects";
import { unsplash } from '../services/unsplash';

import * as actions from '../store/actions'

function* watchGetPhotos() {
    yield takeEvery("GET_PHOTOS", workGetPhotos);
}

function* workGetPhotos() {
    try {       
        const state = yield select();
        const countPhotos = state.countPhotos;
        const payload = yield call(getPhotos, countPhotos);        
        yield put({ type: "PHOTOS_LOADED", payload });
    } catch (e) {
        yield put({ type: "LOADED_ERRORED", payload: e });
    }
}

function getPhotos(countPhotos) {    
    return (
        unsplash.photos.listPhotos(1, countPhotos, 'latest')
            .then(res => res.text())
            .then(res => {

                if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) 
                    { return JSON.parse(res); }
                else { console.error("Лимит запросов исчерпан!"); }
            })
    )
}

function* watchLikePhotos() {
    yield takeEvery("TOGGLE_LIKE", workLikePhotos);
}

function* workLikePhotos() {
    try {       
        const { photo } = yield take(actions.TOGGLE_LIKE);        
        const payload = yield call(likePhoto, photo);        
        yield put({ type: "LIKE_ADD", payload });
    } catch (e) {
        yield put({ type: "LIKE_ERRORED", payload: e });
    }
}

function likePhoto(photo) {
  
    if (photo.liked_by_user === true) {
        return (
            unsplash.photos.unlikePhoto(photo.id)
              .then(res => res.text())
              .then(res => {

                  if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) 
                    { return JSON.parse(res);  }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
          )
    } else if (photo.liked_by_user === false) {   
        return (
            
            unsplash.photos.likePhoto(photo.id)
              .then(res => res.text())
              .then(res => {         
                  if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res);  }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
          )
    }
}


 export default function* rootSaga() {
  yield all([ 
    watchGetPhotos(),
    watchLikePhotos()
  ])
} 

  



