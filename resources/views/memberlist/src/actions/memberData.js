import fetch from 'isomorphic-fetch';
import { REQUEST_MEMBER_DATA_POSTS, RECEIVE_MEMBER_DATA_POSTS } from '.';

/* action 建立函數 */
require('es6-promise').polyfill();
/**
 * 非同步請求
 */
const requestPosts = () => {
    return {
        type: REQUEST_MEMBER_DATA_POSTS
    };
};

const receivePosts = (json) => {
    return {
        type: RECEIVE_MEMBER_DATA_POSTS,
        posts: json,
        receiveTime: Date.now()
    };
};

export const fetchPosts = (path) => {
    return dispatch => {
        dispatch(requestPosts());
        return fetch(path, { credentials: 'same-origin' })
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
};
