module.exports = {
    path: 'sop',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Sop'));
        });
    }
};
