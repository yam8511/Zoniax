const StepForm = (state = {
    isFetching: false, formshow: false, labelshow: false, dalabelshow: false, step_1_hide: false
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
        case 'SET_FORM_SHOW':
            return {
                ...state,
                isFetching: false,
                formshow: action.formshow
            };
        case 'SET_PREFERENTIAL_LABEL_SHOW':
            return {
                ...state,
                isFetching: false,
                labelshow: action.labelshow
            };
        case 'DEPOSIT_ACCOUNT_LABEL_SHOW':
            return {
                ...state,
                isFetching: false,
                dalabelshow: action.dalabelshow
            };
        case 'SET_STEP1_HIDE':
            return {
                ...state,
                isFetching: false,
                step_1_hide: action.step_1_hide
            };
        case 'SET_STEP2_SHOW':
            return {
                ...state,
                isFetching: false,
                step_2_show: action.step_2_show
            };
        default:
            return state;
    }
};

export default StepForm;
