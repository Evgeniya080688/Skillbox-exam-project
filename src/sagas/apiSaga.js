import { takeEvery, call, put } from "redux-saga/effects";
import { unsplash } from '../api/unsplash';

export default function* watcherSaga() {
  yield takeEvery("AUTH", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getToken(unsplash, code));
    yield put({ type: "TOKEN_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getToken(unsplash, code) {
    if (code) {
        return unsplash.auth.userAuthentication(code)
            .then(res => res.json())
            .then(json => {
                unsplash.auth.setBearerToken(json.access_token);
                //unsplash.photos.likePhoto​(​ "kBJEJqWNtNY"​ );
        });
    }
}

