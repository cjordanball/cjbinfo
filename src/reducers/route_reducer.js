import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	home: false,
	resume: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.SET_HOME:
		return { ...state, home: action.payload };
	case ActionTypes.RESUME:
		console.log('resume');
		return { ...state, resume: action.payload };
	default:
		return state;
	}
};
