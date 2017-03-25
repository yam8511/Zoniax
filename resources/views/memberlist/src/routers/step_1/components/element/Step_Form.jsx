import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Form from './StepFormElement/Form';
import { setFormShow, setPreferentialLabelShow, setDepositAccountLabelShow, setStep1Hide, setStep2Show } from '../../../../actions/StepForm';
import { setRadioError, setPreferentialError } from '../../../../actions/DepositAmount';

class StepForm extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
    }
    onClick_submit = () => {
        const store = this.props;
        store.dispatch(setFormShow(true));
        if (store.preferential === 'obtain') {
            store.dispatch(setPreferentialLabelShow(true));
        } else if (store.preferential === 'abandon') {
            store.dispatch(setPreferentialLabelShow(false));
        } else if (store.preferential === '') {
            store.dispatch(setFormShow(false));
            store.dispatch(setRadioError(true));
            store.dispatch(setPreferentialError(true));
        }
        if (store.depositAccount === '') {
            store.dispatch(setDepositAccountLabelShow(false));
        } else if (store.depositAccount !== '') {
            store.dispatch(setDepositAccountLabelShow(true));
        }
    }
    onClick_confirm =() => {
        const store = this.props;
        store.dispatch(setStep1Hide(true));
        store.dispatch(setStep2Show(true));
        store.dispatch(setFormShow(false));
    }
    onClick_close = () => {
        const store = this.props;
        store.dispatch(setFormShow(false));
    }
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        const classes = classNames({
            'step-form': true,
            'step-form-show': store.formshow
        });
        // 清空預選
        return (
            <div
                className={classes}
            >
                <div className="form-back" />
                <div className="form">
                    <div className="form-label" >
                        <p>{store.memberData.lang_file.S_DAW_CONFIRM_AGAIN || '請再次確認提交資訊!2'}</p>
                        <p>{store.memberData.lang_file.S_DAW_PROMO_PER_DAY || '單日【公司匯款優惠】上限為【30元】'}</p>
                    </div>
                    <Form />
                    <div className="verification">
                        <input onFocus={this.onFocus} onBlur={this.onBlur} placeholder="驗證碼" />
                        <div className="verification-img" />
                        <div className="clearfixed" />
                    </div>
                    <div className="clearfixed" />
                    <div className="step-form-footer">
                        <button onClick={this.onClick_close} className="footer-btn-close">關閉</button>
                        <button onClick={this.onClick_confirm} className="footer-btn-confirm">確認</button>
                        <div className="clearfixed" />
                    </div>
                </div>
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

module.exports = connect(select)(StepForm);
