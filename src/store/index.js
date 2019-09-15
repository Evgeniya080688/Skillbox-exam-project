import { createStore } from "redux";
import reducer from '../reducers/index.js';

const initialState = {
	user_info: {}, 
	images: [] 
};

const store = createStore(reducer, initialState);


export default store;