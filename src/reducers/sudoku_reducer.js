import ActionTypes from '../actions/types';

const INITIAL_STATE = {
	solutionArr: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ActionTypes.SOLVE_SUDOKU:
		return { ...state, solutionArr: Array.from(action.payload) };
	default:
		return state;
	}
};
