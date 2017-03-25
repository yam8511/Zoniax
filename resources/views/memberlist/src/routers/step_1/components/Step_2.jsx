/* global window */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Form from './element/StepFormElement/Form';
import Default from './element/Step2Element/Step_2_default';
import CountdownTimer from './element/Step2Element/CountdownTimer'

class Step2 extends Component {
    onClick = () => {
        window.open('', '_self', '');
        window.close();
    }
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        const classes2 = classNames({
            'step-2': true,
            'step-2-show': store.step_2_show
        });

        // 清空預選
        return (
            <div
                className={classes2}
            >
                <div className="step-2-wrap">
                    <h1>极速到帐</h1>
                    <h2 className="process_title">Step2.再匯款</h2>
                    <h2 className="process_pattern">{store.lang_file.S_DAW_DEPOSIT_USE_WAY || '請輸入欲使用存款方式'}<CountdownTimer /></h2>
                    <div className="clearfixed" />
                    <Default />
                    <hr />
                    <button onClick={this.onClick}>離開</button>
                    <Form />
                </div>
            </div>
        );
    }
}
const select = (state) => {
    return {
        lang_file: state.common.data.lang_file,
        depositstate: state.DepositWay.depositway,
        depositAccount: state.DepositAccount.depositAccount,
        memberData: state.memberData.data,
        step_2_show: state.StepForm.step_2_show,
        bankstate: state.BankSelect.selectBankState
    };
};

module.exports = connect(select)(Step2);
