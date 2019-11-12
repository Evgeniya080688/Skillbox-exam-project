import { AUTH, AUTH_SUCSESS, GET_PHOTOS, LOAD_MORE_PHOTOS } from "../constants/action-types";

const INITIAL_STATE = {
  isAuthorizated: "false",
}

const reducer = ( state = {}, action ) => {
	switch (action.type) {
		case AUTH:    		
			return { ...state, isAuthorizated: 'true' }		   		
    	default:
     		return state;
	}
	
}

export default reducer;




