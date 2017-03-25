/* global module */
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// devtools
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';
import Dispatcher from 'redux-devtools-dispatch';

import rootReducer from '../reducers';
import { fetchPosts } from '../actions/common';

const actionCreators = {
    test() {
        return {
            type: 'TEST'
        };
    }
};
export const DevTools = createDevTools(
    <DockMonitor
        defaultIsVisible={false}
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q"
        changeMonitorKey="ctrl-m"
    >
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
        <SliderMonitor keyboardEnabled />
        <DiffMonitor />
        <Dispatcher actionCreators={actionCreators} />
    </DockMonitor>
);

/**
 * 建立 middleware 中繼 function
 * @return {object} state
 */
const configureStore = () => {
    let devTools = [];

    if (typeof document !== 'undefined') {
        devTools = [DevTools.instrument()];
    }

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunkMiddleware, createLogger({
                timestamp: false
            })),
            ...devTools
        )
    );


    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    store.dispatch(fetchPosts('http://webpack:3000/infe/rest/cash/paycompany/displaypage.json'));
    return store;
};

export default configureStore;
