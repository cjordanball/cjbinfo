import axios from 'axios';
import ActionTypes from './types';
import Config from '../../config';

export const signInUser = ({ username, password }, history) => {
	console.log('inSignIn', username, password);
	return (dispatch) => {
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
	};
};

export function testFunc() {
	console.log('testFunc');
	return (dispatch) => {
		axios.get(`${ROOT_URL}/`)
			.then((res) => {
				console.log('res', res);
				dispatch({
					type: ActionTypes.TEST_FUNCTION,
					payload: res.data.hi
				});
			})
			.catch((error) => {
				dispatch(authError('Redux: Ok,  AJAX: Error'));
			});
	};
}

function authError(error) {
	return {
		type: ActionTypes.AUTH_ERROR,
		payload: error
	};
}
