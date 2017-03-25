/* global module */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchPosts } from '../actions/common';

/**
 * 建立 middleware 中繼 function
 * @return {object} state
 */
const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    store.dispatch(fetchPosts('http://webpack:3000/init.json'));
    return store;
};

export default configureStore;
