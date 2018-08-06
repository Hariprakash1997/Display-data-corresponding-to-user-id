import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducer from './Reducer/Store';
import App from './Component/App';
import ReduxForm from './Redux-Form/Redux-Form';

const store = createStore(allReducer);

ReactDOM.render(
	// <Provider store={store}>
	// 	<App />	
	// </Provider>,	
	<ReduxForm />,
	document.getElementById('app')
);