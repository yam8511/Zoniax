/* global document */
import React, { Component } from 'react';
import Select from 'react-select';
import Lodash from 'lodash';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setDepositState } from '../../../../actions/DepositWay';
import AcceleratedRecorded from '../element/DepositwayElement/acceleratedrecorded';

class DepositWay extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
    }
    // 當onChange觸發的function將獲取的銀行資訊（點選的）傳入store.setBankState
    onChange = (obj) => {
        const store = this.props;
        store.dispatch(setDepositState(obj.label, obj.value));
    }
    // Options選單的輸出
    RenderOptions = (ele) => {
        return (
            <span>
                <span className="deposit-label-value">{ele.label}</span>
            </span>
        );
    }
    // 值的設定輸出選取的銀行及圖片
    RenderValue = () => {
        const store = this.props;
        return (
            <span>
                <span className="deposit-label">{store.depositstate.Label}</span>
            </span>
        );
    }
    render() {
        const store = this.props;
        const bankList = store.ele;
        let optionObj = [];
        const optionData = [];
        const listKey = [];
        optionObj = Lodash.toArray(Lodash.omit(bankList, listKey));
        optionObj.forEach((ele, index) => {
            optionData.push({
                value: index + 1,
                label: ele
            });
        });
        if (store.isFetching) {
            return null;
        }
        const classes = classNames({
            'bank-select': true,
            'select-control-error': store.bankError
        });
        // 清空預選
        const is_selected = store.depositstate.ID !== 0;
        const depositway = (is_selected) ? store.depositstate : '';
        return (
            <div className="depositway-select" id="depositway-select">
                <Select
                    labelKey="poset"
                    className="deposit-select "
                    placeholder="請輸入存款方式"
                    noResultsText="無查詢結果"
                    options={optionData}
                    onChange={this.onChange}
                    value={depositway}
                    clearable={false}
                    onCloseResetInput={false}
                    optionRenderer={this.RenderOptions}
                    valueRenderer={this.RenderValue}
                />
                <div className="depositway-title">存款方式</div>
                <AcceleratedRecorded />
            </div>
        );
    }
}
const select = (state) => {
    return {
        ele: state.memberData.data.pay_method,
        depositstate: state.DepositWay.depositway
    };
};

module.exports = connect(select)(DepositWay);
