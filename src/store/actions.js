import { GET_PHOTOS, GET_MORE_PHOTOS } from "./action-types";

export function getPhotos() {
  	return { 
  		type: GET_PHOTOS
  	}
}

export const getMorePhotos = ( currentPage ) => {
	return {
		type: GET_MORE_PHOTOS,
		payload: {
			currentPage
		}
	}
}

export const morePhotosLoaded = ( currentPage ) => {
	return {
		type: MORE_PHOTOS_LOADED,
		payload: {
			currentPage
		}
	}
}














