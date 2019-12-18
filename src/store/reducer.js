import { AUTH, AUTH_SUCSESS, GET_PHOTOS, LOAD_MORE_PHOTOS } from "./action-types";

const initialState = {
	token: null,
  	photos: [],
  	currentPage: 1
};

const reducer = ( state = initialState, action ) => {
	switch (action.type) {
		case "TOKEN_LOADED":  
			return { ...state, token: action.payload.access_token}	
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload }   		
    	default:
     		return state;
	}
	
}


export default reducer;




