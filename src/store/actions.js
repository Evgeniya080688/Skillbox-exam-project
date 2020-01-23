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





