import { toJson } from 'unsplash-js'
import { unsplash } from '../services/unsplash'

import { AUTH, GET_PHOTOS, GET_USER, TOGGLE_LIKE, LOAD_MORE_PHOTOS } from "./action-types";

export function getPhotos(unsplash, currentPage, photoPerPage) {
  	return { 
  		type: GET_PHOTOS,
      payload: {
          unsplash,
          currentPage,
          photoPerPage
      }
  	}
}

export function getToken(unsplash, code) {
    return { 
        type: AUTH,
        payload: {
            unsplash,
            code      
        }
    }
}

export function getUser(unsplash) {
    return { 
        type: GET_USER,
        payload: {
            unsplash
        }
    }
}

export function toggleLike(unsplash, photo) {
    return { 
        type: TOGGLE_LIKE,
        payload: {
            unsplash,
            photo      
        }
    }
}

export function loadMorePhotos(currentPage) {
    return {
        type: LOAD_MORE_PHOTOS,
        payload: {
            currentPage: currentPage++
        }
    }
}



