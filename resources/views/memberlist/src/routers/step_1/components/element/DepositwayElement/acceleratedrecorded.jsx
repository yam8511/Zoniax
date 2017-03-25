/* global document */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProvince, setBranch, setCounty } from '../../../../../actions/DepositWay';

class AcceleratedRecorded extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_',
            acceleratedprompthide: false,
            acceleratedprompthide2: false,
            acceleratedprompthide3: false
        };
    }
    // 當onChange觸發的function將獲取的銀行資訊（點選的）傳入store.setBankState

    handleChange_province = (event) => {
        const store = this.props;
        store.dispatch(setProvince(event.target.value.substr(0, 10)));
    }
    handleChange_branch = (event) => {
        const store = this.props;
        store.dispatch(setBranch(event.target.value.substr(0, 10)));
    }
    handleChange_county = (event) => {
        const store = this.props;
        store.dispatch(setCounty(event.target.value.substr(0, 10)));
    }
    render() {
        const store = this.props;
        if (store.depositstate.ID === 2 || store.depositstate.ID === 3 || store.depositstate.ID === 4) {
            return (
                <div
                    className="accelerated-account accelerated-account-show "
                    id="accelerated-account"
                >
                    <ul>
                        <li>
                            <span>省份</span>
                            <input
                                type="text"
                                value={store.province}
                                onChange={this.handleChange_province}
                                onFocus={this.onFocus_province}
                                onBlur={this.onBlur_province}
                                placeholder="填寫加速到帳"
                            />
                        </li>
                        <li className="li-2">
                            <span>分行名稱</span>
                            <input
                                type="text"
                                value={store.branch}
                                onChange={this.handleChange_branch}
                                onFocus={this.onFocus_branch}
                                onBlur={this.onBlur_branch}
                                placeholder="填寫加速到帳"
                            />
                        </li>
                        <li>
                            <span>{'縣/市'}</span>
                            <input
                                type="text"
                                value={store.county}
                                onChange={this.handleChange_county}
                                onFocus={this.onFocus_county}
                                onBlur={this.onBlur_county}
                                placeholder="填寫加速到帳"
                            />
                        </li>
                    </ul>
                </div>
            );
        }
        return (null);
    }
}
const select = (state) => {
    return {
        depositstate: state.DepositWay.depositway,
        province: state.DepositWay.province,
        branch: state.DepositWay.branch,
        county: state.DepositWay.county,
        provinceprompthide: state.DepositWay.provinceprompthide,
        branchprompthide: state.DepositWay.branchprompthide,
        countyprompthide: state.DepositWay.countyprompthide
    };
};

module.exports = connect(select)(AcceleratedRecorded);
