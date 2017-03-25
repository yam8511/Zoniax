const moneySwitch = (state = {
    isFetching: false
}, action) => {
    switch (action.type) {
        case 'REQUEST_MONEY_SWITCH_POSTS':
            return {
                ...state,
                isFetching: true
            };
        case 'RECEIVE_MONEY_SWITCH_POSTS':
            return {
                ...state,
                ...action.posts,
                isFetching: false,
                lastUpdated: action.receiveTime
            };
        case 'ADD_COUNT':
            return {
                ...state,
                test_count: state.test_count + 1
            };
        default:
            return state;
    }
};

export default moneySwitch;
