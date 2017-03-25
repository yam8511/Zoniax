import React, { Component } from 'react';
import Select from 'react-select';
import Lodash from 'lodash';
import classNames from 'classnames';
import ImageLoader from 'react-imageloader';
import { connect } from 'react-redux';
import { setBankState, setBankError } from '../../../../actions/BankSelect';

class BankSelect extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_'
        };
    }
    // 當onChange觸發的function將獲取的銀行資訊（點選的）傳入store.setBankState
    onChange = (obj) => {
        if (obj === '') { return; }
        const store = this.props;
        store.dispatch(setBankState(obj.id, obj.label, obj.url));
        store.dispatch(setBankError(false, ''));
    }
    // Options選單的輸出
    RenderOptions = (ele) => {
        const bankIcon = ele.id;
        return (
            <span>
                <ImageLoader className="bank-icon-selected" src={`${this.state.imageRoot}/image/bank/${bankIcon}.png`} />
                <span className="bank-label">{ele.label}</span>
            </span>
        );
    }
    // 值的設定輸出選取的銀行及圖片
    RenderValue = (ele) => {
        const store = this.props;
        const bankIcon = (ele.id === store.bankstate.ID) ? 'default' : store.bankstate.ID;
        return (
            <span>
                <ImageLoader className="bank-icon" src={`${this.state.imageRoot}/image/bank/${bankIcon}.png`} />
                <span className="bank-label">{store.bankstate.Name}</span>
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
                value: index,
                id: ele.id,
                url: ele.url,
                label: ele.name
            });
        });
        if (store.isFetching) {
            return null;
        }
        const classes = classNames({
            'bank-select': true,
            'select-control-error': store.bankError
        });
        // const classes2 = classNames({
        //     'error-style-2': true,
        //     'error-style-show': store.bankError
        // });
        // 清空預選
        const is_selected = store.bankstate.ID !== 0;
        const selectedBank = (is_selected) ? store.bankstate : '';
        return (
            <div className="body-bank-select">
                <Select
                    labelKey="name"
                    className={classes}
                    placeholder="輸入銀行名搜索"
                    noResultsText="無查詢結果"
                    options={optionData}
                    onChange={this.onChange}
                    value={selectedBank}
                    clearable={false}
                    optionRenderer={this.RenderOptions}
                    valueRenderer={this.RenderValue}
                />
                <div className="bank-title">转出银行</div>
                <div className="error-style-2 error-style-show">{store.msg}</div>
            </div>
        );
    }
}
const select = (state) => {
    return {
        ele: state.memberData.data.bank_list,
        bankstate: state.BankSelect.selectBankState,
        bankError: state.BankSelect.bankError,
        msg: state.BankSelect.msg
    };
};

module.exports = connect(select)(BankSelect);
