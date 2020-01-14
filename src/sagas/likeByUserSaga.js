import { takeEvery, call, put } from "redux-saga/effects";
import Unsplash from 'unsplash-js';

import { unsplash } from '../services/unsplash';

export default function* watcherSagaLike() {
  yield takeEvery("TOGGLE_LIKE", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(toggleLike);
    yield put({ type: "LIKE_SUCCESS", payload });
  } catch (e) {
    yield put({ type: "LIKE_ERROR", payload: e });
  }
}

function toggleLike() {
    if (photo.liked_by_user === true) {
        return (
            unsplash.photos.unlikePhoto(photo.id)
              .then(res => res.text())
              .then(res => {
                  if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
          )
    } else if (photo.liked_by_user === false) {
        return (
            unsplash.photos.likePhoto(photo.id)
              .then(res => res.text())
              .then(res => {
                  if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
                  else { console.error("Лимит запросов исчерпан!"); }
              })
          )
    }
}

