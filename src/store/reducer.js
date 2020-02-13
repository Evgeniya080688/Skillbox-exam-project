export const initialState = {
	userName: null,
	userLink: null,
  	photos: [],
  	currentPage: 1
};

const reducer = ( state = initialState, action ) => {
	switch (action.type) {	
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload }
		case "MORE_PHOTOS_LOADED":
			return {
				...state, 
				photos: [...state.photos, ...action.payload],
        		currentPage: state.currentPage + 1,
			}
    	default:
     		return state;
	}
	
}


export default reducer;




