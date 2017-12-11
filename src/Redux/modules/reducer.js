import axios from 'axios';

const initialState = {
	currentSearch: null,
	productList: [],
	currentView: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ITEMS':
		return {
			...state,
			productList: action.payload,
		};

		default:
			return state;
	}
}

export function setItems(payload) {
	return {
		type: 'SET_ITEMS',
		payload
	}
}