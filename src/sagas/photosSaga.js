import { takeEvery, call, put, select, take } from "redux-saga/effects";
import { unsplash } from '../services/unsplash';

//Get photos

export function* watchGetPhotos() {
    yield takeEvery("GET_PHOTOS", workGetPhotos);
}

function* workGetPhotos() {
    try {       
        const state = yield select();
        const countPhotos = state.countPhotos;
        const photosPage = state.photosPage;
        const payload = yield call(getPhotos, photosPage, countPhotos);        
        yield put({ type: "PHOTOS_LOADED", payload });
    } catch (e) {
        yield put({ type: "LOADED_ERRORED", payload: e });
    }
}

function getPhotos(photosPage, countPhotos) {    
    return (
        unsplash.photos.listPhotos(photosPage, countPhotos, 'latest')
            .then(res => res.text())
            .then(res => {
                if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) 
                    { return JSON.parse(res); }
                else { console.error("Лимит запросов исчерпан!"); }
            })
    )
}

//Get more photos

export function* watchGetMorePhotos() {
    yield takeEvery("GET_MORE_PHOTOS", workGetMorePhotos);
}

function* workGetMorePhotos() {
    try {       
        const state = yield select();
        const countPhotos = state.countPhotos;
        const photosPage = state.photosPage+1;
        const payload = yield call(getPhotos, photosPage, countPhotos);        
        yield put({ type: "MORE_PHOTOS_LOADED", payload });
    } catch (e) {
        yield put({ type: "MORE_LOADED_ERRORED", payload: e });
    }
}
