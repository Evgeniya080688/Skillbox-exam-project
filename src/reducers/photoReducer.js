const initialState = {
  	photos: [],
  	countPhotos: 15,
  	photosPage: 1,
  	currentPhoto: null,
  	loadingPhotos: false
  	
};

export default ( state = initialState, action ) => {
	let newState = {...state};
	switch (action.type) {
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
    case "TOKEN_LOADED":
      return { ...state, photos: action.payload.photos }
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






