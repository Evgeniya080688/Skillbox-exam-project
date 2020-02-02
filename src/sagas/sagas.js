import { takeEvery, call, put, all } from "redux-saga/effects";
import Unsplash from 'unsplash-js';
import { unsplash } from '../services/unsplash';

function* watchGetPhotos() {
    yield takeEvery("GET_PHOTOS", workGetPhotos);
}

function* workGetPhotos() {
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


 export default function* rootSaga() {
  yield all([ 
    watchGetPhotos()
  ])
} 

  



