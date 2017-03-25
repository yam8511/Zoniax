module.exports = {
    path: 'moneySwitch',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/MoneySwitch'));
        });
    }
};
