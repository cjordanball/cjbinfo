import axios from 'axios';
import ActionTypes from './types';

const ROOT_URL = 'https://10.132.91.83:3142';

export function testFunc() {
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

const authError = error => (
	{
		type: ActionTypes.AUTH_ERROR,
		payload: error
	}
);
