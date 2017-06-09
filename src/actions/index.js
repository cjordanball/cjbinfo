import axios from 'axios';
import ActionTypes from './types';

const ROOT_URL = 'https://cjbinfoapi.com';

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
