import { createId, getDate } from './utils.js';


export const removeComment = ( id ) => {
	return {
		type: 'REMOVE_COMMENT',
		payload: id
	}
}

export const addNewComment = () => {
	return {
		type: 'ADD_NEW_COMMENT',
		payload: {
			id: createId(),
			date: getDate()			
		}		
	}
}

export const changeElForm = ( event ) => {
	const { name, value } = event.target;
	return {
		type: 'CHANGE_EL_FORM',
		payload: {
			name,
			value
		}
		
	}
}