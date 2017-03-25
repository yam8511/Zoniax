import React from 'react';
import { connect } from 'react-redux';
import LoadMask from 'react-load-mask';
import Header from './Header';

const App = (store) => {
    if (store.isFetching) {
        return (
            <div className="loading-wrap">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
            </div>
        );
    }

    return (
        <div className={`container ${store.lang}`}>
            <div>{store.children}</div>
            <LoadMask visible={store.isLoading} />
        </div>
    );
};

const select = (state) => {
    return {
        isFetching: state.common.isFetching,
        isLoading: state.common.isLoading,
        lang: state.common.language
    };
};

export default connect(select)(App);
