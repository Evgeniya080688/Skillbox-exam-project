import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from './reducer.js';
import rootSaga from "../sagas/sagas";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  storeEnhancers(
    applyMiddleware(initialiseSagaMiddleware)
  )
);

initialiseSagaMiddleware.run(rootSaga);

export default store;


