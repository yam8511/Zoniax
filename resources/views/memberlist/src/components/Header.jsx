/* global document */
import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
// import { setRouter } from '../actions/common';


class Header extends Component {
    handleChange = () => {
        // const store = this.props;
        document.getElementById('sop').style.display = 'none';
        document.getElementById('sop2').style.display = 'block';
        // if (store.router === '') {
        //     store.dispatch(setRouter('sop'));
        // }
    }
    handleChange2 = () => {
        // const store = this.porops;
        document.getElementById('sop').style.display = 'block';
        document.getElementById('sop2').style.display = 'none';
        // if (store.router === 'sop') {
        //     store.dispatch(setRouter(''));
        // }
    }
    render() {
        // const store = this.props;
        // console.log(store.router);
        return (
            <div className="header">
                <div className="logo" >
                    Zonaix
                </div>
                <IndexLink
                    to="/"
                    id="sop2"
                    className="back-step-1"
                    onClick={this.handleChange2}
                />
                <Link
                    to="/sop"
                    id="sop"
                    onClick={this.handleChange
                    }
                >
                    <div className="header-deposit-sop help" >?</div>
                    <div className="helpword" >使用帮助</div>
                </Link>
            </div>
        );
    }
}
const select = (state) => {
    return {
        isFetching: state.memberData.isFetching,
        status: state.common.status,
        lang_file: state.common.data.lang_file,
        router: state.common.router
    };
};

module.exports = connect(select)(Header);
