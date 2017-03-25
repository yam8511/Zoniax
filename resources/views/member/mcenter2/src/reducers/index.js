import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import common from './common';
import memberData from './memberData';
import moneySwitch from './moneySwitch';

export default combineReducers({
    common,
    memberData,
    moneySwitch,
    routing: routerReducer
});
