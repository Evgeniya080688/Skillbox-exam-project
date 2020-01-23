
const initialState = {
	token: null,
	userName: null,
	userLink: null,
  	photos: [],
  	currentPage: 1,
  	photoPerPage: 15
};

const reducer = ( state = initialState, action ) => {
	let newState = {...state}; 
	switch (action.type) {
		case "TOKEN_LOADED":  
			return { ...state, token: action.payload}	
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload }
    	default:
     		return state;
	}
	
}


export default reducer;




