//import { GET_PHOTOS, GET_MORE_PHOTOS } from "./action-types";
export const GET_PHOTOS = 'GET_PHOTOS'
export const GET_MORE_PHOTOS = 'GET_MORE_PHOTOS'

export function getPhotos(countPhotos) {
  return {
    type: GET_PHOTOS,
    countPhotos
    
  }
}

















