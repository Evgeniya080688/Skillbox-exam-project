import { takeEvery, call, put } from "redux-saga/effects";
import Unsplash from 'unsplash-js';

import { unsplash, code, authenticationUrl } from '../services/unsplash';

import { getCookie, setCookie, deleteCookie} from '../services/helpers';

export default function* watcherSaga() {
  yield takeEvery("AUTH", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getToken);
    yield put({ type: "TOKEN_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getToken() {
  if (code) {
    if (getCookie("token")) {
        unsplash.auth.setBearerToken(getCookie("token"));
        return unsplash.auth.userAuthentication(code).then(response =>
           response.json());

    } else {
        return unsplash.auth.userAuthentication(code)
            .then((res) => res.json())
            .then((json) => {
              if (json.error) {
                alert("Ошибка передачи данных");
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
                    unsplash.auth.setBearerToken(json.access_token);
                    alert( JSON.stringify(json) );
                    return json;
                }
                else { return console.error("Лимит запросов исчерпан!"); }
              }
            });
            
       
    }
  } 

    
}




