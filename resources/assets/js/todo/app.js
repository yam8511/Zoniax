import '../bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, hasHistory } from 'react-router';
import App from './container/App';
import todoReducer from './reducer/todo';

const logger = store => next => action => {
	console.group('Action');
	console.info('prev state', store.getState());
	console.warn('dispatching', action);
	let result = next(action)
	console.info('next state', store.getState())
	console.groupEnd();
	return result
}

const store = createStore(todoReducer, applyMiddleware(logger));

axios.get('/manager/userlist').then((response) => {
	console.info('呼叫api資料, 請看data', response);
});

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
			<Route path='*' component={NotFound} />
		</Router>
	</Provider>,
	document.getElementById('todo')
);
