import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	home: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.SET_HOME:
		return { ...state, home: action.payload };
	default:
		return state;
	}
};
