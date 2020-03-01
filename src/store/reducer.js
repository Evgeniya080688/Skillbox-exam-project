export const initialState = {
	userName: null,
	userLink: null,
	token: null,
  	photos: [],
  	countPhotos: 18,
  	currenPhoto: null
  	
};

const reducer = ( state = initialState, action ) => {
	let newState = {...state};
	switch (action.type) {
		case "TOKEN_LOADED":
			return { ...state, token: action.payload }
		case "GET_USER_SUCSESS":
			return { ...state, userName: action.payload.first_name, userLink: action.payload.username }
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload, countPhotos: state.countPhotos + 18}
		case "LIKE_ADD":
			newState.photos = state.photos.map((photo, id)=>{
            if(id === action.photo.id){
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
    	default:
     		return state;
	}
	
}


export default reducer;




