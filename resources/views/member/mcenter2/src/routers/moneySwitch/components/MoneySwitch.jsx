import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, addCount } from '../../../actions/moneySwitch';
import { setMask } from '../../../actions/common';

class MoneySwitch extends Component {
    componentDidMount() {
        const store = this.props;

        store.dispatch(fetchPosts('http://webpack:3000/money_switch.json')).then(
            () => {
                store.dispatch(setMask(false));
            }
        );
    }
    componentWillUnmount() {
        const store = this.props;

        store.dispatch(setMask(true));
    }
    render() {
        const store = this.props;

        if (store.isFetching) {
            return null;
        }

        return (
            <div>
                moneySwitch: {store.tpl_name}
                <div
                    onClick={() => {
                        store.dispatch(addCount());
                    }}
                >{store.count}</div>
            </div>
        );
    }
}

const select = (state) => {
    return {
        isFetching: state.moneySwitch.isFetching,
        tpl_name: state.common.tpl_name,
        count: state.moneySwitch.test_count
    };
};

module.exports = connect(select)(MoneySwitch);
