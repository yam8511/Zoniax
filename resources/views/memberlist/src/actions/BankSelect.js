import fetch from 'isomorphic-fetch';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_BANK,
    SET_BANK_ERROR
} from '.';

require('es6-promise').polyfill();
/**
 * 非同步請求
 */
const requestPosts = () => {
    return {
        type: REQUEST_POSTS
    };
};

const receivePosts = (json) => {
    return {
        type: RECEIVE_POSTS,
        posts: json,
        receiveTime: Date.now()
    };
};

export const fetchPosts = (path) => {
    return dispatch => {
        dispatch(requestPosts());
        return fetch(path)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
};
export const setBankState = (id, name, url) => {
    return {
        type: SET_BANK,
        selectBankState: {
            Name: name,
            ID: id,
            URL: url }
    };
};

export const setBankError = (Boolean, Msg) => {
    return {
        type: SET_BANK_ERROR,
        bankError: Boolean,
        msg: Msg
    };
};
