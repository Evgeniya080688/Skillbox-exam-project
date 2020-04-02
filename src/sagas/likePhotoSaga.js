import { takeEvery, call, put, take, select } from "redux-saga/effects";
import { unsplash } from '../services/unsplash';

import * as actions from '../store/actions'

export default function* watchLikePhotos() {
    yield takeEvery("TOGGLE_LIKE", workLikePhotos);
}

function* workLikePhotos() {
    try {       
        const state = yield select();
        const photo = state.currentPhoto;
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