import { AUTH, AUTH_SUCSESS, GET_PHOTOS, LOAD_MORE_PHOTOS } from "../constants/action-types";

const initialState = {
	token: null,
  	photoList: [],
  	currentPage: 1,
  	isAuth: false
};

const reducer = ( state = initialState, action ) => {
	switch (action.type) {
		case "TOKEN_LOADED":
			return { ...state, token: action.payload.access_token, isAuth: true}	
		case "PHOTOS_LOADED":
			return { ...state, photoList: action.payload }   		
    	default:
     		return state;
	}
	
}


export default reducer;




