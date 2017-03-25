const DepositWay = (state = {
    isFetching: false,
    depositway: { Lable: '', ID: 0 },
    province: '',
    branch: '',
    county: '',
    acceleratedaccountshow: false,
    acceleratedprompthide: false
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
        case 'SET_DEPOSIT_WAY':
            return {
                ...state,
                isFetching: false,
                depositway: { ...action.depositway }
            };
        case 'SET_PROVINCE':
            return {
                ...state,
                province: action.province
            };
        case 'SET_BRANCH':
            return {
                ...state,
                branch: action.branch
            };
        case 'SET_COUNTY':
            return {
                ...state,
                county: action.county
            };
        case 'SET_ACCELERATED_ACCOUNT_SHOW':
            return {
                ...state,
                acceleratedaccountshow: action.acceleratedaccountshow
            };
        default:
            return state;
    }
};

export default DepositWay;
