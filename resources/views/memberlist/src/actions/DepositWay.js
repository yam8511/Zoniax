import fetch from 'isomorphic-fetch';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_DEPOSIT_WAY,
    SET_PROVINCE,
    SET_BRANCH,
    SET_COUNTY,
    SET_ACCELERATED_ACCOUNT_SHOW
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
export const setDepositState = (lable, id) => {
    return {
        type: SET_DEPOSIT_WAY,
        depositway: {
            Label: lable,
            ID: id
        }
    };
};

export const setProvince = (name) => {
    return {
        type: SET_PROVINCE,
        province: name
    };
};

export const setBranch = (name) => {
    return {
        type: SET_BRANCH,
        branch: name
    };
};

export const setCounty = (name) => {
    return {
        type: SET_COUNTY,
        county: name
    };
};

export const setAcceleratedAccountShow = (Boolean) => {
    return {
        type: SET_ACCELERATED_ACCOUNT_SHOW,
        acceleratedaccountshow: Boolean
    };
};
