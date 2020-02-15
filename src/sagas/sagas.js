import { takeEvery, call, put, all, select, take } from "redux-saga/effects";
import { unsplash } from '../services/unsplash';

import * as actions from '../store/actions'

function* watchGetPhotos() {
    yield takeEvery("GET_PHOTOS", workGetPhotos);
}

function* workGetPhotos() {
    try {        
        const { countPhotos } = yield take(actions.GET_PHOTOS);
        //const countPhotos = 18;
        alert(countPhotos);
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

function* watchGetMorePhotos() {
    yield takeEvery("GET_MORE_PHOTOS", workGetMorePhotos);
}

function* workGetMorePhotos() {
    try {
        
        const state = yield select();
        const currentPage = state.currentPage;
        const payload = yield call(getMorePhotos, currentPage);
        //yield put(getMorePhotos(currentPage));
        yield put({ type: "MORE_PHOTOS_LOADED", payload });
    } catch (e) {
        yield put({ type: "MORE_LOADED_ERRORED", payload: e });
    }
}

function getMorePhotos(currentPage) {    
    return (
        unsplash.photos.listPhotos(currentPage+1, 18, 'latest')
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
    watchGetPhotos(),
    watchGetMorePhotos()
  ])
} 

  



