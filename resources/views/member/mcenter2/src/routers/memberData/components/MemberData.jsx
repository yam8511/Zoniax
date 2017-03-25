import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/memberData';
import { setMask } from '../../../actions/common';

class MemberData extends Component {
    componentDidMount() {
        const store = this.props;

        store.dispatch(fetchPosts('http://webpack:3000/member_data.json')).then(
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
                MemberData: {store.tpl}
            </div>
        );
    }
}

const select = (state) => {
    return {
        isFetching: state.memberData.isFetching,
        tpl: state.common.tpl
    };
};

module.exports = connect(select)(MemberData);
