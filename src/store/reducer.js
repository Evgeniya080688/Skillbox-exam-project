export const initialState = {
	userName: null,
	userLink: null,
  	photos: [],
  	countPhotos: 18,
  	
};

const reducer = ( state = initialState, action ) => {
	switch (action.type) {	
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload, countPhotos: state.countPhotos + 18}
    	default:
     		return state;
	}
	
}


export default reducer;




