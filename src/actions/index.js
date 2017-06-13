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
				type: ActionTypes.SIGN_IN_USER
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
				type: ActionTypes.SIGN_UP_USER
			});
			localStorage.setItem('token', res.data.token);
			history.push('/home');
		})
		.catch(({ response }) => {
			console.log('error', response);
		});
	}
);

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
