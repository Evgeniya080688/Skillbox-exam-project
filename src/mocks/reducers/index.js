import { ADD_LIKE, OPEN_PICTURE, COME_BACK_LIST } from "../constants/action-types";


const  reducer = ( state = {}, action ) => {

	switch (action.type) {
		case ADD_LIKE:
    		return {
			    state
			}

    		
    	default:
     		return state;
	}
	
}

export default reducer;

