/* global document */
/* global alert */
import React, { Component } from 'react';
// import Lodash from 'lodash';
// import ImageLoader from 'react-imageloader';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { fetchPosts } from '../../../actions/memberData';
import { setMask, setRouter } from '../../../actions/common';
import { setLebelHide, setFormShow, setPreferentialLabelShow, setDepositAccountLabelShow } from '../../../actions/StepForm';
import { setPreferential, setDepositAmount } from '../../../actions/DepositAmount';
import { setDepositAccount, setDepositAccountName } from '../../../actions/DepositAccount';
import { setBankError } from '../../../actions/BankSelect';
// import rootReducer from '../../../reducers';
import Step2 from './Step_2';
import BankSelect from './element/bankselect';
import DepositWay from './element/depositway';
import DepositAmount from './element/depositamount';
import DepositAccountName from './element/depositaccountname';
import DepositAccount from './element/depositaccount';
import StepForm from './element/Step_Form';
import Form from './element/StepFormElement/Form';

class Step1 extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_',
            menus: false
        };
    }
    componentDidMount() {
        const store = this.props;
        store.dispatch(setRouter(''));
        store.dispatch(fetchPosts('http://localhost:3000/manager/userlist')).then(
            () => {
                store.dispatch(setMask(false));
            }
        );
    }
    componentWillUnmount() {
        const store = this.props;
        store.dispatch(setMask(true));
    }
    changeMenu = () => {
        this.setState({ menus: !this.state.menus });
    }

    // 驗證function
    hasSymbol = (val) => {
        const reg = /[~`!@#\$%\^&\*\(\)_\-\+=\\\|\[\]\{\}:;""<>\?,\.\/]+/;
        return reg.test(val);
    }
    isNunber = (val) => {
        const reg = /^[0-9]*$/;
        return reg.test(val);
    }
    isEmpty= (val) => {
        const reg = /[ \r\t\n\f]+/;
        return reg.test(val);
    }
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        const classes = classNames({
            menu: true,
            'menu-hidden': this.state.menus
        });
        const classes2 = classNames({
            'step-2': true,
            'step-2-show': store.step_2_show
        });
        // 清空預選
        return (
            <div className="member-wrap">
                <div className={classes}>
                    <img className="menu-btn" alt="" src="../../../image/member/list.png" onClick={this.changeMenu} />
                    <div className="menu-info">
                        <p className="title-text">Manager</p>
                        <ul>
                            <li>
                                會員列表
                            </li>
                            <li>
                                商家列表
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const select = (state) => {
    return {
        isFetching: state.memberData.isFetching,
        status: state.common.status
    };
};

module.exports = connect(select)(Step1);
