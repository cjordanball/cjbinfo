import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	logStatus: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.SIGN_IN_USER:
		return { ...state, logStatus: true };
	case ActionTypes.SIGN_UP_USER:
		return { ...state, logStatus: true };
	case ActionTypes.LOG_OUT_USER:
		return { ...state, logStatus: false };
	default:
		return state;
	}
};
