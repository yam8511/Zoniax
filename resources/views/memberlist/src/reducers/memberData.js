const memberData = (state = {
    isFetching: true
}, action) => {
    switch (action.type) {
        case 'REQUEST_MEMBER_DATA_POSTS':
            return {
                ...state,
                ...action.posts,
                isLoading: true,
                isFetching: true
            };
        case 'RECEIVE_MEMBER_DATA_POSTS':
            return {
                ...state,
                ...action.posts,
                isFetching: false,
                lastUpdated: action.receiveTime
            };
        default:
            return state;
    }
};

export default memberData;
