/* global document */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setDepositAccountName } from '../../../../actions/DepositAccount';

class DepositAccountName extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
    }
    onChange = (event) => {
        const store = this.props;
        this.setState({ value: event.target.value });
        if ((event.target.value === '') || this.isEmpty(event.target.value)) {
            store.dispatch(setDepositAccountName({
                value: event.target.value.substr(0, 20),
                isError: true,
                msg: '欄位不能為空'
            }));
        } else if (this.hasSymbol(event.target.value)) {
            store.dispatch(setDepositAccountName({
                value: event.target.value.substr(0, 20),
                isError: true,
                msg: '請勿輸入特殊字元'
            }));
        } else {
            store.dispatch(setDepositAccountName({
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
            'Select-control': true,
            input: true,
            'select-control-error': store.depositAccountName.isError
        });
        const classes2 = classNames({
            'error-style': true,
            'error-style-show': store.depositAccountName.isError
        });
        return (
            <div
                className="deposit"
            >
                <input
                    className={classes}
                    type="text"
                    value={store.depositAccountName.value}
                    onChange={this.onChange}
                />
                <p>入款帐户姓名</p>
                <div className={classes2}>{store.depositAccountName.msg}</div>
            </div>
        );
    }
}
const select = (state) => {
    return {
        depositAccountName: state.DepositAccount.depositAccountName,
        Name_error: state.DepositAccount.Name_error,
        Name_text: state.DepositAccount.Name_text
    };
};

module.exports = connect(select)(DepositAccountName);
