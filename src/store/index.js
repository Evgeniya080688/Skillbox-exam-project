import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from './reducer.js';
import apiSaga from "../sagas/apiSaga";
import getPhotosSaga from "../sagas/getPhotosSaga";
import getUserSaga from "../sagas/getUserSaga";
import likeByUserSaga from "../sagas/likeByUserSaga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  storeEnhancers(
    applyMiddleware(initialiseSagaMiddleware)
  )
);


initialiseSagaMiddleware.run(apiSaga);
initialiseSagaMiddleware.run(getPhotosSaga);
initialiseSagaMiddleware.run(getUserSaga);
initialiseSagaMiddleware.run(likeByUserSaga);

export default store;


