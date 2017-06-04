import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import '../styles/styles.less';

render(
	<App />, document.querySelector('#root')
);
