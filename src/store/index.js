import { createStore } from "redux";
import reducer from '../reducers/index.js';

const initialState = {
	
};

const store = createStore(reducer, initialState);


export default store;