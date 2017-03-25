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
            depositamountValue: ''
        };
    }
    componentDidMount() {
        const store = this.props;
        store.dispatch(setRouter(''));
        store.dispatch(fetchPosts('/infe/rest/cash/payfast/displaypage.json')).then(
            () => {
                store.dispatch(setMask(false));
            }
        );
    }
    componentWillUnmount() {
        const store = this.props;
        store.dispatch(setMask(true));
    }
    onClick_reset = () => {
    }
    onClick_submit = () => {
        const store = this.props;
        this.setState({ depositamountValue: store.depositamount.value });
        // 打開表單頁面
        store.dispatch(setFormShow(true));
        // 判斷輸入銀行ID
        if (store.bankstate.ID === 0) {
            store.dispatch(setBankError(true, '欄位不能為空'));
            store.dispatch(setFormShow(false));
        }
        // 判斷存入金額
        if ((store.depositamount.value === '') || this.isEmpty(store.depositamount.value)) {
            store.dispatch(setFormShow(false));
            store.dispatch(setDepositAmount({
                amount: store.depositamount.value,
                isError: true,
                msg: '欄位不能為空'
            }));
        } else if (this.hasSymbol(store.depositamount.value)) {
            store.dispatch(setFormShow(false));
        } else if (!this.isNunber(store.depositamount.value)) {
            store.dispatch(setFormShow(false));
        } else if ((store.depositamount.value) > 1000) {
            store.dispatch(setFormShow(false));
        } else if ((store.depositamount.value) < 10) {
            store.dispatch(setFormShow(false));
        } else {
            store.dispatch(setDepositAmount({
                value: store.depositamount.value,
                isError: false,
                msg: ''
            }));
            if (store.preferential === 'obtain') {
                store.dispatch(setPreferentialLabelShow(true));
            } else if (store.preferential === 'abandon') {
                store.dispatch(setPreferentialLabelShow(false));
            } else if (store.preferential === '') {
                store.dispatch(setFormShow(false));
                store.dispatch(setPreferential(store.preferential, true, true));
            }
        }
        if ((store.depositAccountName.value === '') || this.isEmpty(store.depositAccountName.value)) {
            store.dispatch(setFormShow(false));
            store.dispatch(setDepositAccountName({
                value: store.depositAccountName.value,
                isError: true,
                msg: '欄位不能為空'
            }));
        } else if (this.hasSymbol(store.depositAccountName.value)) {
            store.dispatch(setFormShow(false));
        } else {
            store.dispatch(setDepositAccountName({
                value: store.depositAccountName.value,
                isError: false,
                msg: ''
            }));
        }
        // 判斷銀行帳戶
        if (store.depositAccount.value === '') {
            store.dispatch(setDepositAccountLabelShow(false));
        } else if (this.hasSymbol(store.depositAccount.value)) {
            store.dispatch(setPreferentialLabelShow(false));
            store.dispatch(setFormShow(false));
        } else if (store.depositAccount.value !== '') {
            store.dispatch(setDepositAccountLabelShow(true));
        }
    }
    onClick_close = () => {
        const store = this.props;
        store.dispatch(setFormShow(false));
    }
    onFocus = () => {
        const store = this.props;
        store.dispatch(setLebelHide(true));
    }
    onBlur = (e) => {
        const store = this.props;
        if (!e.target.value) {
            store.dispatch(setLebelHide(false));
        }
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
            'step-1': true,
            'step-1-hide': store.step_1_hide
        });
        const classes2 = classNames({
            'step-2': true,
            'step-2-show': store.step_2_show
        });
        // 清空預選
        return (
            <div className="step">
                <div className={classes}>
                    <h1>极速到帐</h1>
                    <h2 className="process_title">Step1.先提交</h2>
                    <h2 className="process_pattern">{store.lang_file.S_DAW_DEPOSIT_USE_WAY || '請輸入欲使用存款方式'}</h2>
                    <BankSelect />
                    <DepositAmount />
                    <DepositAccountName />
                    <DepositWay />
                    <DepositAccount />
                    <div className="footer">
                        <hr />
                        <button onClick={this.onClick_reset} className="footer-btn-reset">重設</button>
                        <button onClick={this.onClick_submit} className="footer-btn-submit">提交</button>
                    </div>
                    <div className="clearfixed" />
                </div>
                <StepForm />
                <Step2 />
            </div>
        );
    }
}
const select = (state) => {
    return {
        isFetching: state.memberData.isFetching,
        status: state.common.status,
        lang_file: state.common.data.lang_file,
        ele: state.common.data.bank_list,
        bankstate: state.BankSelect.selectBankState,
        depositstate: state.DepositWay.depositway,
        province: state.DepositWay.province,
        branch: state.DepositWay.branch,
        county: state.DepositWay.county,
        depositamount: state.DepositAmount.depositamount,
        preferential: state.DepositAmount.preferential,
        depositAccountName: state.DepositAccount.depositAccountName,
        depositAccount: state.DepositAccount.depositAccount,
        selfHide: state.StepForm.lebalhide,
        formshow: state.StepForm.formshow,
        labelshow: state.StepForm.labelshow,
        DAlabelshow: state.StepForm.dalabelshow,
        radioerror: state.DepositAmount.radioerror,
        memberData: state.memberData.data,
        step_1_hide: state.StepForm.step_1_hide,
        step_2_show: state.StepForm.step_2_show
    };
};

module.exports = connect(select)(Step1);
