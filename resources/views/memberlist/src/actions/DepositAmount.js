import fetch from 'isomorphic-fetch';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_DEPOSIT_AMOUNT,
    SET_PREFERENTIAL,
    SET_PREFERENTIAL_ERROR,
    SET_PREFERENTIAL_SHOW,
    SET_EXPLANATION_SHOW
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
export const setDepositAmount = (depositamount) => {
    return {
        type: SET_DEPOSIT_AMOUNT,
        depositamount
    };
};
export const setPreferential = (value, Boolean = false, Boolean2 = false) => {
    return {
        type: SET_PREFERENTIAL,
        preferential: value,
        preferentialshow: Boolean,
        preferentialerror: Boolean2
    };
};
export const setExplanationShow = (Boolean) => {
    return {
        type: SET_EXPLANATION_SHOW,
        explanationshow: Boolean
    };
};
