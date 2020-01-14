import { takeEvery, call, put } from "redux-saga/effects";
import Unsplash from 'unsplash-js';

import { unsplash } from '../services/unsplash';

import * as selectors from './selectors';

export default function* watcherSagaGetUser() {
  yield takeEvery("GET_PHOTOS", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getPhotos);
    yield put({ type: "PHOTOS_LOADED", payload });
  } catch (e) {
    yield put({ type: "LOADED_ERRORED", payload: e });
  }
}

function getPhotos() {    
    return (
      unsplash.photos.listPhotos(1, 16, 'latest')
        .then(res => res.text())
        .then(res => {
            if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) 
              { return JSON.parse(res); }
            else { console.error("Лимит запросов исчерпан!"); }
        })
    )
}