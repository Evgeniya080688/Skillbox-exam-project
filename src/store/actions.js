import { toJson } from 'unsplash-js'
import { unsplash } from '../services/unsplash'

import { AUTH, DATA_REQUESTED, GET_PHOTOS } from "./action-types";

export function getPhotos() {
  	return { 
  		type: GET_PHOTOS 
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

