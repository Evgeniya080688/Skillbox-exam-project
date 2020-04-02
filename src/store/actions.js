import { GET_PHOTOS, GET_MORE_PHOTOS, TOGGLE_LIKE, GET_USER, GET_AUTH, GET_CURRENT_PHOTO, LOADING_CONTROL, AUTH_OUT } from "./action-types";

export function getAuth() {
    return {
        type: GET_AUTH    
    }
}

export function authOut() {
    return {
        type: AUTH_OUT
    }
}

export function getPhotos() {
    return {
        type: GET_PHOTOS,  
    }
}

export function getMorePhotos(loadingPhotos) {
    return {
        type: GET_MORE_PHOTOS, 
    }
}

export function loadingControl() {
    return {
        type: LOADING_CONTROL
    }
}

export function likeImageAction(photo, id) {
    return {
        type: TOGGLE_LIKE,
      	photo,
      	id, 
    }
}

export function getCurrentPhoto(photo) {
    return {
        type: GET_CURRENT_PHOTO,
        photo,
        
    }
}


















