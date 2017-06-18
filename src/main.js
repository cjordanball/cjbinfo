import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Tracker from './hocs/ga_tracker';
import '../styles/styles.less';
import ActionTypes from './actions/types';
import App from './components/app';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
	store.dispatch({ type: ActionTypes.AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={Tracker(App)} />
		</BrowserRouter>
	</Provider>, document.querySelector('#root'));
