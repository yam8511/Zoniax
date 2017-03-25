import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AcceleratedAccountLabel from '../StepFormElement/AcceleratedAccountLabel';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
    }
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        const classes2 = classNames({
            'preferential-label': !(store.labelshow),
            'preferential-label-show': store.labelshow
        });
        const classes3 = classNames({
            'deposit-account-label': !(store.DAlabelshow),
            'deposit-account-label-show': store.DAlabelshow
        });
        // 清空預選
        return (
            <div>
                <ul>
                    <li>转出银行<span>{store.bankstate.Name}</span></li>
                    <li>入款帐號户名<span>{store.depositAccountName.value}</span></li>
                    <li>存入金額<span>{store.depositamount.value}</span></li>
                    <li className={classes2}>獲取優惠<span>{'20%存款优惠，最高RMB100，真人达到有效投注1倍即可提款'}</span></li>
                    <li>存款方式<span>{store.depositstate.Label}</span></li>
                    <AcceleratedAccountLabel />
                    <li className={classes3}>入款帐户<span>{store.depositAccount.value}</span></li>
                </ul>
            </div>
        );
    }
}
const select = (state) => {
    return {
        isFetching: state.memberData.isFetching,
        bankstate: state.BankSelect.selectBankState,
        depositstate: state.DepositWay.depositway,
        depositamount: state.DepositAmount.depositamount,
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

module.exports = connect(select)(Form);
