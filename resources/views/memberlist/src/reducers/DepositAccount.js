const DepositAccount = (state = {
    isFetching: false,
    depositamount: '',
    depositAccountName: { value: '', isError: false, msg: '' },
    depositAccount: { value: '', isError: false, msg: '' },
    depositAccountError: false,
    depositAccountSymbolError: false,
    error_1: false
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
                depositamount: action.depositamount
            };
        case 'SET_DEPOSIT_ACCOUNTNAME':
            return {
                ...state,
                depositAccountName: { ...action.depositAccountName }
            };
        case 'SET_DEPOSIT_ACCOUNT':
            return {
                ...state,
                depositAccount: { ...action.depositAccount }
            };
        default:
            return state;
    }
};

export default DepositAccount;
