import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	logStatus: false,
	userName: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.SIGN_IN_USER:
		return { ...state, logStatus: true, userName: action.payload.userName };
	case ActionTypes.AUTH_USER:
		return { ...state, logStatus: true };
	case ActionTypes.SIGN_UP_USER:
		return { ...state, logStatus: true, userName: action.payload.userName };
	case ActionTypes.LOG_OUT_USER:
		return { ...state, logStatus: false, userName: '' };
	case ActionTypes.AUTH_ERROR:
		return { ...state, error: action.payload };
	default:
		return state;
	}
};
