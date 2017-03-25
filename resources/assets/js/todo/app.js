import '../bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './container/App';
import todoReducer from './reducer/todo'

let store = createStore(todoReducer);

axios.get('/manager/userlist').then((response) => {
	console.info('呼叫api資料, 請看data', response);
});

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('todo')
);
