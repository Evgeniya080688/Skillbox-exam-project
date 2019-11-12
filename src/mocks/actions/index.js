import { toJson } from 'unsplash-js'
import { unsplash } from '../api/unsplash'

export const unsplashAuth = code => async dispatch => {
  const response = await unsplash.auth.userAuthentication(code).then(toJson)
  dispatch({
    type: 'AUTH',
    payload: response,
  })
}


// export const unsplashAuth = ( code ) => {
// 	const response = unsplash.auth.userAuthentication(code).then(toJson)
// 	return {
// 		type: 'AUTH',
// 		payload: code
// 	}
// }

// export const getData = () => {
//   return { 
//   	type: "DATA_REQUESTED" 
//   }
// }