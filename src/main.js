import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import '../styles/styles.less';
import Header from './components/common/header';
import FrontPage from './components/frontPage/frontPage';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Header />
				<Route path="/" component={FrontPage} />
			</div>
		</BrowserRouter>
	</Provider>, document.querySelector('#root'));
