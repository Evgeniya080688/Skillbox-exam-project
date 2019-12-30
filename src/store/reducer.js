
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
			return { ...state, token: action.payload.access_token}	
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload }
		case "USER_LOADED":
			return { ...state, userName: action.payload.first_name, userLink: action.payload.username }   
		case 'LIKE_SUCCESS':
        	newState.photos = state.photos.map((photo, i)=>{
            if(i === action.photo.id){
                if (photo.liked_by_user == true) {
                    photo.liked_by_user = false;
                    photo.likes--;
                } else if (photo.liked_by_user == false) {
                    photo.liked_by_user = true;
                    photo.likes++;
                }
                return photo;
            }
            return photo;
        });
        return {...newState};
        case 'LOAD_MORE_PHOTOS':
        	return { ...state, currentPage: action.payload.currentPage }
    	default:
     		return state;
	}
	
}


export default reducer;




