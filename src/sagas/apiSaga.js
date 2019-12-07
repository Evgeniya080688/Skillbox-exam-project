import { takeEvery, call, put } from "redux-saga/effects";
import Unsplash from 'unsplash-js';

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
    const code = location.search.split( 'code=' )[1];
    const unsplash = new Unsplash({
      applicationId:"711d5fa98592f3057ed538ca1ac6134ad6d8684023a8d56d71b57ec7577658bc",
      secret:"bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f",
      //callbackUrl:"http://service.kvt.su/auth"
      //callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
      callbackUrl: 'http://localhost:8080'
    });

    if (getCookie("token")) {
        unsplash.auth.setBearerToken(getCookie("token"));
        return unsplash.auth.userAuthentication(code).then(response =>
            response.json());

    } else if (code) {
        return unsplash.auth.userAuthentication(code)
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
                } else { console.error("Лимит запросов исчерпан!"); }
            });
    }
}




