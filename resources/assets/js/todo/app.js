import '../bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './container/App';
import todoReducer from './reducer/todo'

const logger = store => next => action => {
	console.group('Action');
	console.info('prev state', store.getState());
	console.warn('dispatching', action);
	let result = next(action)
	console.info('next state', store.getState())
	console.groupEnd();
	return result
}

let store = createStore(todoReducer, applyMiddleware(logger));

// axios.get('/manager/userlist').then((response) => {
// 	console.info('呼叫api資料, 請看data', response);
// });

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('todo')
);
