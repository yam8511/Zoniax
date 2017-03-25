/* global alert */
/* global document */

import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { setDepositAmount, setPreferential, setExplanationShow } from '../../../../actions/DepositAmount';

class DepositAmount extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
    }
    onClick = () => {
        const store = this.props;
        store.dispatch(setExplanationShow(true));
    }
    onBlur = () => {
        const store = this.props;
        store.dispatch(setExplanationShow(false));
        if (store.depositamount.amount !== '') {
            store.dispatch(setPreferential('', true, false));
        }
        if (store.depositamount.amount === '') {
            store.dispatch(setPreferential('', false, false));
        }
    }
    handleChange = (event) => {
        const store = this.props;
        // store.dispatch(setDepositAmount(event.target.value.substr(0, 4)));
        if ((event.target.value === '') || this.isEmpty(event.target.value)) {
            store.dispatch(setDepositAmount({
                amount: event.target.value.substr(0, 4),
                isError: true,
                msg: '欄位不能為空'
            }));
        } else if (this.hasSymbol(event.target.value)) {
            store.dispatch(setDepositAmount({
                amount: event.target.value.substr(0, 4),
                isError: true,
                msg: '請勿輸入特殊字元'
            }));
        } else if (!this.isNunber(event.target.value)) {
            store.dispatch(setDepositAmount({
                amount: event.target.value.substr(0, 4),
                isError: true,
                msg: '只能輸入數字'
            }));
        } else if ((event.target.value) > 1000) {
            store.dispatch(setDepositAmount({
                value: event.target.value.substr(0, 4),
                isError: true,
                msg: '匯款金額超過上限'
            }));
        } else if ((event.target.value) < 10) {
            store.dispatch(setDepositAmount({
                value: event.target.value.substr(0, 4),
                isError: true,
                msg: '匯款金額低於下限'
            }));
        } else {
            store.dispatch(setDepositAmount({
                value: event.target.value.substr(0, 4),
                isError: false,
                msg: ''
            }));
            console.log(this.isNunber(event.target.value.substr(0, 4)));
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
    // 優惠function
    handleChange_preferential = (event) => {
        const store = this.props;
        store.dispatch(setPreferential(event.target.value, true, false));
    }

    render() {
        const store = this.props;
        // console.log(store.S_DAW_PROMO_MSG);
        if (store.isFetching) {
            return null;
        }
        const classes = classNames({
            'error-1': store.preferentialerror
        });
        const classes2 = classNames({
            preferential: true,
            'preferential-error': store.preferentialerror,
            'preferential-show': store.preferentialshow
        });
        const classes3 = classNames({
            'Select-control': true,
            'deposit-input': true,
            'deposit-margin-out': store.preferentialshow,
            'select-control-error': store.depositamount.isError
        });
        const classes4 = classNames({
            explanation: true,
            'explanation-show': store.explanationshow
        });
        const classes5 = classNames({
            'error-style': true,
            'error-style-show': store.depositamount.isError
        });
        // console.log(store.S_DAW_CONFIRM_AGAIN);
        return (
            <div
                className="deposit_amount  deposit"
            >
                <input
                    className={classes3}
                    id="depositstyle"
                    type="text"
                    value={store.depositamount.value}
                    onChange={this.handleChange}
                    onFocus={this.onClick}
                    onBlur={this.onBlur}
                />
                <p>存入金额</p>
                <div className={classes4} id="explanation">
                    <p>最低支付金額 10 RMB</p>
                    <p>最高支付金額 1000 RMB</p>
                    <p>{'請存入有尾數的金額，方邊系統辨別，如：134、876各位數的金額'}</p>
                </div>
                <div className={classes2} >
                    <div className="radios">
                        <input type="radio" name="preferential-name" value="obtain" id="obtain" onChange={this.handleChange_preferential} />
                        <label htmlFor="obtain" className={classes} /><div className="radio_text">獲取</div>
                        <input type="radio" name="preferential-name" value="abandon" id="abandon" onChange={this.handleChange_preferential} />
                        <label htmlFor="abandon" className={classes} id="label_radio2" /><div className="radio_text">放棄</div>
                        <div className="preferential_text"> {'20%存款优惠，最高RMB100，真人达到有效投注1倍即可提款'}</div>
                    </div>
                </div>
                <div className={classes5}>{store.depositamount.msg}</div>
            </div>
        );
    }
}
const select = (state) => {
    return {
        ele: state.common.data.bank_list,
        bankstate: state.BankSelect.selectBankState,
        depositamount: state.DepositAmount.depositamount,
        preferential: state.DepositAmount.preferential,
        S_DAW_PROMO_MSG: state.memberData,
        preferentialerror: state.DepositAmount.preferentialerror,
        preferentialshow: state.DepositAmount.preferentialshow,
        explanationshow: state.DepositAmount.explanationshow
    };
};

module.exports = connect(select)(DepositAmount);
