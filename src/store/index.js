import { createStore } from "redux";
import reducer from '../reducers/index.js';

const photos = [
	{ id: "000000001", url: "https://unsplash.com/photos/1WFXk3WJXZU", description: "Cooking in Color",
	likes: "100500", user: "Вася", date: "08-09-2019" },

	{ id: "000000001", url: "https://unsplash.com/photos/1WFXk3WJXZU", description: "Cooking in Color",
	likes: "100500", user: "Вася", date: "08-09-2019" },

	{ id: "000000001", url: "https://unsplash.com/photos/1WFXk3WJXZU", description: "Cooking in Color",
	likes: "100500", user: "Вася", date: "08-09-2019" },

	{ id: "000000001", url: "https://unsplash.com/photos/1WFXk3WJXZU", description: "Cooking in Color",
	likes: "100500", user: "Вася", date: "08-09-2019" },

	{ id: "000000001", url: "https://unsplash.com/photos/1WFXk3WJXZU", description: "Cooking in Color",
	likes: "100500", user: "Вася", date: "08-09-2019" }
];

const initialState = {
	userInfo: { name: "Eugeniya"}, 
	photos: photos
};

const store = createStore(reducer, initialState);


export default store;