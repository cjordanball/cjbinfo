import axios from 'axios';
import ActionTypes from './types';
import Config from '../../config';

function authError(error) {
	return {
		type: ActionTypes.AUTH_ERROR,
		payload: error
	};
}

export const signInUser = ({ username, password }, history) => (
	(dispatch) => {
		axios.post(`${Config.AUTH_PATH}/signin`, { username, password })
		.then((res) => {
			dispatch({
				type: ActionTypes.SIGN_IN_USER,
				payload: {
					userName: username
				}
			});
			localStorage.setItem('token', res.data.token);
			history.push('/home');
		})
		.catch(({ response }) => {
			console.log('error', response);
		});
	}
);

export const signUpUser = ({ username, email, password }, history) => (
	(dispatch) => {
		axios.post(`${Config.AUTH_PATH}/signup`, { username, email, password })
		.then((res) => {
			dispatch({
				type: ActionTypes.SIGN_UP_USER,
				payload: {
					userName: username
				}
			});
			localStorage.setItem('token', res.data.token);
			history.push('/home');
		})
		.catch(({ response }) => {
			dispatch({
				type: ActionTypes.AUTH_ERROR,
				payload: response.data.error
			});
		});
	}
);

export const logOutUser = () => {
	localStorage.removeItem('token');
	return {
		type: ActionTypes.LOG_OUT_USER
	};
};

export function testFunc() {
	return (dispatch) => {
		axios.get(`${Config.API_PATH}/`)
			.then((res) => {
				dispatch({ type: ActionTypes.TEST_FUNCTION, payload: res.data.hi });
			})
			.catch((error) => {
				console.log('ERROR: ', error);
				dispatch(authError('Redux: Ok,  AJAX: Error'));
			});
	};
}

export const solveSudoku = (numList) => {
	return (dispatch) => {
		axios.post(`${Config.API_PATH}/sudoku`, { numList })
		.then((res) => {
			console.log('res', res.data.puzzleArr);
			dispatch({
				type: ActionTypes.SOLVE_SUDOKU,
				payload: res.data.puzzleArr
			});
		})
		.catch((error) => {
			console.log('ERR: ', error);
			dispatch(authError('Unable to connect'));
		});
	};
};

export const clearSudoku = () => {
	const emptyArray = Array(81).fill('', 0, 81);

	return {
		type: ActionTypes.SOLVE_SUDOKU,
		payload: emptyArray
	};
};

export const setHome = (onHome) => {
	return {
		type: ActionTypes.SET_HOME,
		payload: onHome
	};
};
