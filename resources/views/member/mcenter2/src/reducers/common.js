const posts = (state = {
    isFetching: false
}, action) => {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return {
                ...state,
                isLoading: true,
                isFetching: true
            };
        case 'RECEIVE_POSTS':
            return {
                ...state,
                ...action.posts,
                isFetching: false,
                lastUpdated: action.receiveTime
            };
        case 'SET_MASK':
            return {
                ...state,
                isLoading: action.hasMask
            };
        default:
            return state;
    }
};

export default posts;
