export const initialState = {
	userName: null,
	userLink: null,
	token: null,
  	photos: [],
  	countPhotos: 15,
  	photosPage: 1,
  	currentPhoto: null,
  	loadingPhotos: false
  	
};

const reducer = ( state = initialState, action ) => {
	let newState = {...state};
	switch (action.type) {
		case "TOKEN_LOADED":
			return { ...state, token: action.payload.token, userName: action.payload.user.first_name, userLink: action.payload.user.username, photos: action.payload.photos }
		case "AUTH_OUT":
			return { ...state, token: null, userName: null, userLink: null }
		case "GET_USER_SUCSESS":
			return { ...state, userName: action.payload.first_name, userLink: action.payload.username }
		case "GET_CURRENT_PHOTO":
			return { ...state, currentPhoto: action.photo }
		case "PHOTOS_LOADED":
			return { ...state, photos: action.payload }
		case "LOADING_CONTROL":
			return { ...state, loadingPhotos: true}
		case "MORE_PHOTOS_LOADED":
			return { 
				...state, 
				photos: [...state.photos, ...action.payload ], 
				photosPage: state.photosPage+1,
				loadingPhotos: false
			 	}
		case "LIKE_ADD":
			newState.photos = state.photos.map((photo)=>{
            if(photo.id === action.payload.photo.id){
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




