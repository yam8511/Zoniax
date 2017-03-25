import React, { Component } from 'react';
import { connect } from 'react-redux';

class AcceleratedAccountLabel extends Component {
    render() {
        const store = this.props;
        // 清空預選
        if (store.depositstate.ID === 2 || store.depositstate.ID === 3 || store.depositstate.ID === 4) {
            return (
                <div>
                    <li>省份<span>{store.province}</span></li>
                    <li>縣/市<span>{store.county}</span></li>
                    <li>分行名稱<span>{store.branch}</span></li>
                </div>
            );
        }
        return (null);
    }
}
const select = (state) => {
    return {
        province: state.DepositWay.province,
        branch: state.DepositWay.branch,
        county: state.DepositWay.county,
        depositstate: state.DepositWay.depositway
    };
};

module.exports = connect(select)(AcceleratedAccountLabel);
