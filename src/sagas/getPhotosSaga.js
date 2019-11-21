import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("GET_PHOTOS", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getPhotos);
    yield put({ type: "PHOTOS_LOADED", payload });
  } catch (e) {
    yield put({ type: "LOADED_ERRORED", payload: e });
  }
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