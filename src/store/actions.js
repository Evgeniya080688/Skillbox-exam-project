//import { GET_PHOTOS, GET_MORE_PHOTOS } from "./action-types";
export const GET_PHOTOS = 'GET_PHOTOS'
export const GET_MORE_PHOTOS = 'GET_MORE_PHOTOS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const GET_USER = 'GET_USER'
export const GET_AUTH = 'GET_AUTH'

export function getAuth() {
    return {
        type: GET_AUTH    
    }
}

export function getPhotos() {
    return {
        type: GET_PHOTOS,  
    }
}

export function getMorePhotos() {
    return {
        type: GET_MORE_PHOTOS,  
    }
}

export function likeImageAction(photo, id) {
    return {
        type: TOGGLE_LIKE,
      	photo,
      	id, 
    }
}

















