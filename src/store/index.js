import { createStore } from "redux";
import reducer from '../reducers/index.js';

const photos = [
	{
	  "id": "pFqrYbhIAXs",
	  "updated_at": "2017-10-31T17:12:31-04:00",
	  "likes": 355,
	  "user": {
	    "id": "oB1kn_oBee",
	    "updated_at": "2018-04-10T13:27:21-04:00",
	    "username": "lukeskywalker",
	    "name": "Luke Skywalker",
	    "location": "Luke's House, Tatooine",
	    "links": {
	      "self": "https://api.unsplash.com/users/lukeskywalker",
	      "html": "https://unsplash.com/@lukeskywalker",
	      "photos": "https://api.unsplash.com/users/lukeskywalker/photos",
	      "likes": "https://api.unsplash.com/users/lukeskywalker/likes",
	      "portfolio": "https://api.unsplash.com/users/lukeskywalker/portfolio",
	      "following": "https://api.unsplash.com/users/lukeskywalker/following",
	      "followers": "https://api.unsplash.com/users/lukeskywalker/followers"
	    },
	    "profile_image": {
	      "small": "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
	      "medium": "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f",
	      "large": "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5"
	    },
	    "total_collections": 6,
	    "instagram_username": "hamillhimself",
	    "total_likes": 1805,
	    "total_photos": 119
	  },
	  "urls": {
	    "raw": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
	    "full": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390",
	    "regular": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
	    "small": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
	    "thumb": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02"
	  },
	  "links": {
	    "self": "https://api.unsplash.com/photos/KR2mdHJ5qMg",
	    "html": "https://unsplash.com/photos/KR2mdHJ5qMg",
	    "download": "https://unsplash.com/photos/KR2mdHJ5qMg/download",
	    "download_location": "https://api.unsplash.com/photos/KR2mdHJ5qMg/download"
	  },
	  "location": {
	    "name": "Tatooine, Outer Rim Territories",
	    "city": "Tatooine",
	    "country": "Outer Rim Territories",
	    "position": {
	      "latitude": 45.5017,
	      "longitude": 73.5673
	    }
	  },
	  "views": 1383736,
	  "downloads": 6344
	},

	{
	  "id": "pFqrYbhIAXs",
	  "updated_at": "2017-10-31T17:12:31-04:00",
	  "likes": 355,
	  "user": {
	    "id": "oB1kn_oBee",
	    "updated_at": "2018-04-10T13:27:21-04:00",
	    "username": "lukeskywalker",
	    "name": "Luke Skywalker",
	    "location": "Luke's House, Tatooine",
	    "links": {
	      "self": "https://api.unsplash.com/users/lukeskywalker",
	      "html": "https://unsplash.com/@lukeskywalker",
	      "photos": "https://api.unsplash.com/users/lukeskywalker/photos",
	      "likes": "https://api.unsplash.com/users/lukeskywalker/likes",
	      "portfolio": "https://api.unsplash.com/users/lukeskywalker/portfolio",
	      "following": "https://api.unsplash.com/users/lukeskywalker/following",
	      "followers": "https://api.unsplash.com/users/lukeskywalker/followers"
	    },
	    "profile_image": {
	      "small": "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7",
	      "medium": "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f",
	      "large": "https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5"
	    },
	    "total_collections": 6,
	    "instagram_username": "hamillhimself",
	    "total_likes": 1805,
	    "total_photos": 119
	  },
	  "urls": {
	    "raw": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
	    "full": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390",
	    "regular": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
	    "small": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd060fe209b4a56733a1dcc9b5aea53a",
	    "thumb": "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02"
	  },
	  "links": {
	    "self": "https://api.unsplash.com/photos/KR2mdHJ5qMg",
	    "html": "https://unsplash.com/photos/KR2mdHJ5qMg",
	    "download": "https://unsplash.com/photos/KR2mdHJ5qMg/download",
	    "download_location": "https://api.unsplash.com/photos/KR2mdHJ5qMg/download"
	  },
	  "location": {
	    "name": "Tatooine, Outer Rim Territories",
	    "city": "Tatooine",
	    "country": "Outer Rim Territories",
	    "position": {
	      "latitude": 45.5017,
	      "longitude": 73.5673
	    }
	  },
	  "views": 1383736,
	  "downloads": 6344
	}
];


const photoList = {
	currentPage: 1,
	photos: photos
};

const initialState = {
	auth: { token: "bae45466393d679eec4668dce80dc5f26dcf46220adef7c681ea053a2ef9a81f"}, 
	photoList: photoList
};

const store = createStore(reducer, initialState);


export default store;
