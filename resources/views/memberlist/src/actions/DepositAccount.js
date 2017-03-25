import fetch from 'isomorphic-fetch';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_DEPOSIT_ACCOUNT,
    SET_DEPOSIT_ACCOUNTNAME
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
export const setDepositAccount = (depositAccount) => {
    return {
        type: SET_DEPOSIT_ACCOUNT,
        depositAccount
    };
};

export const setDepositAccountName = (depositAccountName) => {
    return {
        type: SET_DEPOSIT_ACCOUNTNAME,
        depositAccountName
    };
};
