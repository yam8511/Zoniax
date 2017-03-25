const posts = (state = {
    isFetching: false, selectBankState: { Name: '', ID: 0, URL: '' }, router: ''
}, action) => {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return {
                ...state,
                ...action.posts,
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
        case 'SET_ROUTER':
            return {
                ...state,
                router: action.router
            };
        default:
            return state;
    }
};

export default posts;
