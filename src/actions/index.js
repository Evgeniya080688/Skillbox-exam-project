import { toJson } from 'unsplash-js'
import { unsplash } from '../api/unsplash'

import { AUTH, DATA_REQUESTED, GET_PHOTOS } from "../constants/action-types";

export function getPhotos() {
  	return { 
  		type: GET_PHOTOS 
  	}
}

export function getToken() {
  	return { 
  		type: AUTH
  		
  	}
}

