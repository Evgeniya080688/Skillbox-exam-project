import { takeEvery, call, put, all } from "redux-saga/effects";
import { unsplash } from '../services/unsplash';

const currentPage = 1;

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
        unsplash.photos.listPhotos(currentPage, 16, 'latest')
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
        const payload = yield call(getMorePhotos);
        yield put({ type: "MORE_PHOTOS_LOADED", payload });
    } catch (e) {
        yield put({ type: "MORE_LOADED_ERRORED", payload: e });
    }
}

function getMorePhotos() {    
    return (
        unsplash.photos.listPhotos(currentPage+1, 16, 'latest')
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

  



