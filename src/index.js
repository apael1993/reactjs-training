import {Provider} from 'react-redux';
import './assets/styles/index.css';
import ReactDOM from 'react-dom';
import App from './containers';
import store from './store';
import React from 'react';

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
