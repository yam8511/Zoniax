import '../bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './container/App';
import todoReducer from './reducer/todo'

let store = createStore(todoReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
