import { takeEvery, call, put } from "redux-saga/effects";
import unsplash from '../mocks/api/unsplash';

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getPhotos);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}

export const getPhotos = (unsplash, start = 1, end = 15) => {
    return (
      unsplash.photos.listPhotos(start, end, 'latest')
        .then(res => res.text())
        .then(res => {
            if (res != "Rate Limit Exceeded" && !JSON.parse(res).errors) { return JSON.parse(res); }
            else { console.error("Лимит запросов исчерпан!"); }
        })
    )
}