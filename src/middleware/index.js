import { AUTH } from "../constants/action-types";

const code = window.location.search.split('code=')[1]

export function checkCodeMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === AUTH) {      
        if (code) {
          
          return dispatch({ type: "DATA_LOADED" });
        }
      }
      return next(action);
    };
  };
}