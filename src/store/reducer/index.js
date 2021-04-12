import * as actionTypes from '../action-types';

const initialState = {
	todos: []
};

const reducer = (state = initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case actionTypes.SET_TODOS: {
			return {
				...state,
				todos: payload,
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
