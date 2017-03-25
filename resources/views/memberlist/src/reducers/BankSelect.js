const BankSelect = (state = {
    isFetching: false, selectBankState: { Name: '', ID: 0, URL: '' }, bankError: false, msg: ''
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
        case 'SET_BANK':
            return {
                ...state,
                isFetching: false,
                selectBankState: { ...action.selectBankState }
            };
        case 'SET_BANK_ERROR':
            return {
                ...state,
                bankError: action.bankError,
                msg: action.msg
            };
        default:
            return state;
    }
};

export default BankSelect;
