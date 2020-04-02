import { takeEvery, select, call, put } from "redux-saga/effects";
import { unsplash, code } from '../services/unsplash';

import { getPhotos } from './photosSaga.js';

export default function* watchAuth() {
    yield takeEvery("GET_AUTH", workAuth);
}

function* workAuth() {
    try {  
        const token = yield call(getAuth);
        const user = yield call(getUser);
        const photos = yield call(getPhotos); 
        yield put({ type: "TOKEN_LOADED", payload: { token, user, photos } });
    
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


  



