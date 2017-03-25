import fetch from 'isomorphic-fetch';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_FORM_SHOW,
    SET_PREFERENTIAL_LABEL_SHOW,
    DEPOSIT_ACCOUNT_LABEL_SHOW,
    SET_STEP1_HIDE,
    SET_STEP2_SHOW
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
export const setFormShow = (Boolean) => {
    return {
        type: SET_FORM_SHOW,
        formshow: Boolean
    };
};
export const setPreferentialLabelShow = (Boolean) => {
    return {
        type: SET_PREFERENTIAL_LABEL_SHOW,
        labelshow: Boolean
    };
};
export const setDepositAccountLabelShow = (Boolean) => {
    return {
        type: DEPOSIT_ACCOUNT_LABEL_SHOW,
        dalabelshow: Boolean
    };
};
export const setStep1Hide = (Boolean) => {
    return {
        type: SET_STEP1_HIDE,
        step_1_hide: Boolean
    };
};
export const setStep2Show = (Boolean) => {
    return {
        type: SET_STEP2_SHOW,
        step_2_show: Boolean
    };
};
