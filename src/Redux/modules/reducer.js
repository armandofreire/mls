import axios from 'axios';

const initialState = {
	currentSearch: null,
	productList: [],
	productDetails: {},
	currentView: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				productList: action.payload,
				currentView: 'productList'
			};

		case 'SET_ITEM_DETAILS':
			return {
				...state,
				productDetails: action.payload,
				currentView: 'productDetails'
			}

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

export function setItemDetails(payload) {
	return {
		type: 'SET_ITEM_DETAILS',
		payload
	}
}