import fetch from 'isomorphic-fetch';
import { REQUEST_MONEY_SWITCH_POSTS, RECEIVE_MONEY_SWITCH_POSTS, ADD_COUNT } from '.';

/**
 * 非同步請求
 */
const requestPosts = () => {
    return {
        type: REQUEST_MONEY_SWITCH_POSTS
    };
};

const receivePosts = (json) => {
    return {
        type: RECEIVE_MONEY_SWITCH_POSTS,
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

export const addCount = () => {
    return {
        type: ADD_COUNT
    };
};
