import { takeEvery, call, put } from "redux-saga/effects";
import Unsplash from 'unsplash-js';

import { unsplash, code } from '../api/unsplash';

import { getCookie, setCookie, deleteCookie} from '../helpers';

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
    if (getCookie("token")) {
        unsplash.auth.setBearerToken(getCookie("token"));
        return unsplash.auth.userAuthentication(code).then(response =>
           response.json());

    } else if (code) {
        unsplash.auth.userAuthentication(code)
            .then(res => res.text())
            .then(res => {
                if (res && res != "Rate Limit Exceeded") {
                    window.localStorage['keycode'] = code;
                    let date = new Date;
                    date.setDate(date.getDate() + 1);
                    setCookie("token", JSON.parse(res).access_token, {
                        expires: date.toUTCString()
                    });
                    unsplash.auth.setBearerToken(JSON.parse(res).access_token);
                    alert(res);
                    return JSON.parse(res);
                } else { console.error("Лимит запросов исчерпан!"); }
            });
      
       
    }
}




