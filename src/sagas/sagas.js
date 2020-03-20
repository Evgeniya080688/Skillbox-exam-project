import { takeEvery, call, put, all, select, take } from "redux-saga/effects";
import { unsplash, code } from '../services/unsplash';

import * as actions from '../store/actions'

//Get token

function* watchAuth() {
    yield takeEvery("GET_AUTH", workAuth);
}

function* workAuth() {
    try {
    const token = yield call(getAuth);
    const user = yield call(getUser);
    yield put({ type: "TOKEN_LOADED", payload: { token, user} });
    
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getAuth() {   
    //авторизируемся           
    return unsplash.auth.userAuthentication(code)
        .then(response => response.json())
        .then(json => {
            // Сохраняем полученный токен для того, чтоб можно было выполнять какие-либо действия от имени пользователя
            if (json.error) {
                const authenticationUrl = unsplash.auth.getAuthenticationUrl([
                    "public",
                    "write_likes",
              ]);
              location.assign(authenticationUrl);
            }
            else {
                if (JSON.stringify(json) && JSON.stringify(json)!= "Rate Limit Exceeded") {
                    unsplash.auth.setBearerToken(json.access_token);
                    return json.access_token;}
                else {
                    return console.error("Лимит запросов исчерпан!");
                }
            }
        });
}

//Get photos

function* watchGetPhotos() {
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

function* watchGetMorePhotos() {
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

//Like Photos

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
                  // alert(res);
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
                  // alert(res);    
                  if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res);  }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
         ) 
    }
}

//Get user

// function* watchGetUser() {
//     yield takeEvery("GET_USER", workGetUser);
// }

// function* workGetUser() {
//     try {       
//         //const { unsplash } = yield take(actions.GET_AUTH);
//         const payload = yield call(getUser );
//         yield put({ type: "GET_USER_SUCSESS", payload });
//     } catch (e) {
//         yield put({ type: "USER_ERRORED", payload: e });
//     }
// }

function getUser() {
        return ( unsplash.currentUser.profile()
            .then(res => res.text())
            .then(res => {
                if (res && res != "Rate Limit Exceeded" && !JSON.parse(res).errors) 
                    { return JSON.parse(res); }
                else { console.error("Лимит запросов исчерпан!"); }
      })
      )
    
}

 export default function* rootSaga() {
    yield all([ 
        watchAuth(),
        watchGetPhotos(),
        watchGetMorePhotos(),
        watchLikePhotos()
    ])
} 

  



