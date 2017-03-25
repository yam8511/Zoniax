import fetch from 'isomorphic-fetch';
import {
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_MASK
} from '.';

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

export const setMask = (hasMask) => {
    return {
        type: SET_MASK,
        hasMask
    };
};
