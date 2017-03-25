import React, { Component } from 'react';
import { connect } from 'react-redux';


class CountdownTimer extends Component {
    constructor() {
        super();
        this.state = {
            imageRoot: (process.env.NODE_ENV === 'development') ? '..' : '_',
            depositamountValue: '',
            secondsRemaining: 59,
            minutesRemaining: 59,
            isGetinit: false
        };
    }

    componentDidMount = () => {
        this.setState({ secondsRemaining: this.state.secondsRemaining });
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    update = () => {
        if (!this.state.getinit) {
            const store = this.props;
            if (store.step_2_show) {
                this.setState({ secondsRemaining: 59 });
                this.setState({ minutesRemaining: 59 });
            }
            this.setState({ getinit: true });
        }
    }
    tick = () => {
        if (this.state.minutesRemaining >= 0) {
            this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
            if (this.state.secondsRemaining <= -1) {
                this.setState({ minutesRemaining: this.state.minutesRemaining - 1 });
                this.setState({ secondsRemaining: 59 });
                if (this.state.minutesRemaining <= 9 && this.state.minutesRemaining >= 0) {
                    this.setState({ minutesRemaining: '0' + this.state.minutesRemaining });
                }
            }
            if (this.state.secondsRemaining <= 9 && this.state.secondsRemaining >= 0) {
                this.setState({ secondsRemaining: '0' + this.state.secondsRemaining });
            }
        }

        if (this.state.secondsRemaining <= 0 && this.state.minutesRemaining <= 0) {
            this.setState({ secondsRemaining: '00' });
            this.setState({ minutesRemaining: '00' });
            clearInterval(this.interval);
        }
    }
    render() {
        const store = this.props;
        if (store.isFetching) {
            return null;
        }
        if (store.step_2_show) {
            return (
                <div className="countdowntimer">{this.state.minutesRemaining }:{this.state.secondsRemaining}</div>
            );
        }
        return (null);
    }
}

const select = (state) => {
    return {
        isFetching: state.moneySwitch.isFetching,
        lang_file: state.common.data.lang_file,
        step_2_show: state.StepForm.step_2_show
    };
};

module.exports = connect(select)(CountdownTimer);
