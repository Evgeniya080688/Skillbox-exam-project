//import { GET_PHOTOS, GET_MORE_PHOTOS } from "./action-types";
export const GET_PHOTOS = 'GET_PHOTOS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'

export function getPhotos() {
  return {
    type: GET_PHOTOS    
  }
}

export function likeImageAction(photo, id) {
    return {
        type: TOGGLE_LIKE,
    	photo,
    	id,
        
        
    }
}

















