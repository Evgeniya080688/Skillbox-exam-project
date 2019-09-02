import { REMOVE_COMMENT, ADD_NEW_COMMENT, CHANGE_EL_FORM } from "../constants/action-types";


const  reducer = ( state = {}, action ) => {

	switch (action.type) {
		case REMOVE_COMMENT:
    		return {
			...state,
			comments: state.comments.filter( comment => comment.id !== action.payload ) 
			}

    	case ADD_NEW_COMMENT:
    		let { comments, newAuthor, newComment } = state;  
    		return {
    		...state,    		
			comments: [...comments, { id: action.payload.id, author: newAuthor, date: action.payload.date , text: newComment}],
			newAuthor: '',
	 		newComment: ''			
    		}  		

    	case CHANGE_EL_FORM:
    		return {
    		...state,
    		[action.payload.name]: action.payload.value 
    		}
    		
    	default:
     		return state;
	}
	
}

export default reducer;

