import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import common from './common';
import memberData from './memberData';
import moneySwitch from './moneySwitch';
import BankSelect from './BankSelect';
import DepositWay from './DepositWay';
import DepositAmount from './DepositAmount';
import DepositAccount from './DepositAccount';
import StepForm from './StepForm';

export default combineReducers({
    common,
    memberData,
    moneySwitch,
    BankSelect,
    DepositWay,
    DepositAmount,
    DepositAccount,
    StepForm,
    routing: routerReducer
});
