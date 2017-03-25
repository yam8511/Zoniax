import App from '../components/App';

// routers
const step_1 = require('./step_1');
const sop = require('./sop');
// routers config
const routeConfig = {
    path: '/',
    component: App,
    indexRoute: step_1,
    childRoutes: [
        sop
    ]
};

export default routeConfig;
