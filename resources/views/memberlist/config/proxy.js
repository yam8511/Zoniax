const convertCookies = (cookies) => {
    var result = '';
    Object.keys(cookies).forEach((key) => {
        result += `${key}=${cookies[key]};`;
    });

    return result;
};

module.exports = {
    '/manager': {
        target: 'http://localhost:3000',
        headers: {
            credentials: "same-origin",
            SESSIONID: 'qwe123'
        }
    },
    '/m': {
        target: 'http://localhost:80',
        changeOrigin: true
    }
};
