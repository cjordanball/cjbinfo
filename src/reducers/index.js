import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import TestReducer from './reducer_test';

const rootReducer = combineReducers({
	form: formReducer,
	test: TestReducer
});

export default rootReducer;
