import { takeEvery, call, put } from "redux-saga/effects";
import Unsplash from 'unsplash-js';

import { unsplash } from '../services/unsplash';

export default function* watcherSagaListPhotos() {
  yield takeEvery("GET_USER", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getUser);
    yield put({ type: "USER_LOADED", payload });
  } catch (e) {
    yield put({ type: "USER_UNNOWN", payload: e });
  }
}

function getUser() {
    return (
        unsplash.currentUser.profile()
            .then(res => res.text())
            .then(res => {
                if (res && res != "Rate Limit Exceeded" && !JSON.parse(res).errors) 
                    { return JSON.parse(res); }
                else { console.error("Лимит запросов исчерпан!"); }
      })
    )
}