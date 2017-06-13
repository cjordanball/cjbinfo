import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import '../styles/styles.less';
import ActionTypes from './actions/Types';
import Header from './components/common/header';
import FrontPage from './components/frontPage/frontPage';
import SignInPage from './components/authComponents/signin';
import SignUpPage from './components/authComponents/signup';
import HomePage from './components/home';
import LogOutPage from './components/authComponents/signout';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if (token) {
	store.dispatch({ type: ActionTypes.AUTH_USER });
}

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div className="container">
				<Header />
				<Switch>
					<Route path="/signin" component={SignInPage} />
					<Route path="/signup" component={SignUpPage} />
					<Route path="/home" component={HomePage} />
					<Route path="/logout" component={LogOutPage} />
					<Route path="/" component={FrontPage} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>, document.querySelector('#root'));
