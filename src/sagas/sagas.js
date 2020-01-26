import { takeEvery, call, put, all } from "redux-saga/effects";
import Unsplash from 'unsplash-js';
import { select } from 'redux-saga';
import { unsplash, code, authenticationUrl } from '../services/unsplash';
import { getCookie, setCookie, deleteCookie} from '../services/helpers';

function* watchApi() {
  yield takeEvery("AUTH", workApi);
}

function* workApi() {
  try {
    const payload = yield call(getToken);
    yield put({ type: "TOKEN_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getToken() {
    if (getCookie("token")) {
        //unsplash.auth.setBearerToken(getCookie("token"));
        //return unsplash.auth.userAuthentication(code).then(response =>
        //   response.json());
        return getCookie("token");

    } else {
        return unsplash.auth.userAuthentication(code)
            .then((res) => res.json())
            .then((json) => {
              if (json.error) {
                location.assign(authenticationUrl);
              }
              else {
                if (JSON.stringify(json) && JSON.stringify(json)!= "Rate Limit Exceeded") {
                    window.localStorage['keycode'] = code;
                    let date = new Date;
                    date.setDate(date.getDate() + 1);
                    setCookie("token", json.access_token, {
                        expires: date.toUTCString()
                    });
                    //unsplash.auth.setBearerToken(json.access_token);
                    return json.access_token;
                }
                else { return console.error("Лимит запросов исчерпан!"); }
              }
            });         
       
    }
  
 }


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
    watchApi(), 
    watchGetPhotos()
  ])
} 

  



