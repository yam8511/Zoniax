import App from '../components/App';

// routers
const memberData = require('./memberData');
const moneySwitch = require('./moneySwitch');

// routers config
const routeConfig = {
    path: '/',
    component: App,
    indexRoute: memberData,
    childRoutes: [
        moneySwitch
    ]
};

export default routeConfig;
