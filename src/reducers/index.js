import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth_reducer';
import TestReducer from './reducer_test';

const rootReducer = combineReducers({
	form: formReducer,
	test: TestReducer,
	auth: AuthReducer
});

export default rootReducer;
