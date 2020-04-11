const initialState = {
	userName: null,
	userLink: null,
	token: null
  	
};

export default  ( state = initialState, action ) => {
	let newState = {...state};
	switch (action.type) {
		case "TOKEN_LOADED":
			return { ...state, token: action.payload.token, userName: action.payload.user.first_name, userLink: action.payload.user.username }
		case "AUTH_OUT":
			return { ...state, token: null, userName: null, userLink: null }
		case "GET_USER_SUCSESS":
			return { ...state, userName: action.payload.first_name, userLink: action.payload.username }
    	default:
     		return state;
	}
	
}






