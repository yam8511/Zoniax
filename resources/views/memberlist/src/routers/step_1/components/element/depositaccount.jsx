/* global document */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setDepositAccount } from '../../../../actions/DepositAccount';

class DepositAccount extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
        // this.hasSymbol = this.hasSymbol.bind(this);
    }
    onChange = (event) => {
        const store = this.props;
        if (event.target.value === '') {
            store.dispatch(setDepositAccount({
                value: event.target.value.substr(0, 20),
                isError: true,
                msg: '欄位不能為空'
            }));
        } else if (this.hasSymbol(event.target.value)) {
            store.dispatch(setDepositAccount({
                value: event.target.value.substr(0, 20),
                isError: true,
                msg: '請勿輸入特殊字元'
            }));
        } else {
            store.dispatch(setDepositAccount({
                value: event.target.value.substr(0, 20),
                isError: false,
                msg: ''
            }));
        }
    }
    hasSymbol = (val) => {
        const reg = /[~`!@#\$%\^&\*\(\)_\-\+=\\\|\[\]\{\}:;""<>\?,\.\/]+/;
        return reg.test(val);
    }
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        const classes = classNames({
            'Select-control': true,
            input: true,
            'select-control-error': store.depositAccount.isError
        });
        const classes2 = classNames({
            'error-style': true,
            'error-style-show': store.depositAccount.isError
        });
        return (
            <div
                className="deposit"
            >
                <input
                    className={classes}
                    type="text"
                    defaultValue={store.depositAccount.value}
                    onChange={this.onChange}
                />
                <p>入款帐号</p>
                <span>选填</span>
                <div className={classes2}>{store.depositAccount.msg}</div>
            </div>
        );
    }
}
const select = (state) => {
    return {
        depositAccount: state.DepositAccount.depositAccount,
        preferential: state.DepositAmount.preferential
    };
};

module.exports = connect(select)(DepositAccount);
