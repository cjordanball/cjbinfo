import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	message: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.TEST_FUNCTION:
		return { ...state, message: action.payload };
	case ActionTypes.AUTH_ERROR:
		console.log('Autherr');
		return { ...state, message: action.payload };
	default:
		return state;
	}
};
