import { createStore } from "redux";
import reducer from '../reducers/index.js';

const defaultComments = [
  {id: "000000001", author: "Вася", date: "08-07-2017", text: "Очень классно! Молодцы"},
  {id: "000000002", author: "Коля", date: "08-07-2017", text: "Просто Супер"},
  {id: "000000003", author: "Петя", date: "08-07-2017", text: "Да, согласен"}
];

const comments = JSON.parse(localStorage.getItem("comments"));

const initialState = {
	comments: comments || defaultComments,
	newAuthor: '',
	newComment: ''
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
	localStorage['comments'] = JSON.stringify(store.getState().comments);
})

export default store;