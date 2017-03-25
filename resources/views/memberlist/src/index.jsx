/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore, { DevTools } from './store/configureStore';
import routeConfig from './routers/config';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routeConfig} />
    </Provider>,
    document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
    render(
        <Provider store={store}>
            <DevTools />
        </Provider>,
        document.getElementById('devtools')
    );
}
