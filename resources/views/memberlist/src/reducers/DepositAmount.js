const DepositAmount = (state = {
    isFetching: false,
    depositamount: { value: '', isError: false, msg: '' },
    preferential: '',
    preferentialerror: false,
    preferentialshow: false,
    explanationshow: false
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
        case 'SET_DEPOSIT_AMOUNT':
            return {
                ...state,
                depositamount: { ...action.depositamount }
            };
        case 'SET_PREFERENTIAL':
            return {
                ...state,
                preferential: action.preferential,
                preferentialerror: action.preferentialerror,
                preferentialshow: action.preferentialshow
            };
        case 'SET_EXPLANATION_SHOW':
            return {
                ...state,
                explanationshow: action.explanationshow
            };
        default:
            return state;
    }
};

export default DepositAmount;
