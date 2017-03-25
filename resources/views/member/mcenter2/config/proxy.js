const convertCookies = (cookies) => {
    var result = '';
    Object.keys(cookies).forEach((key) => {
        result += `${key}=${cookies[key]};`;
    });

    return result;
};

module.exports = {
    '/cl': {
        target: 'https://ctl-new-v2.vir777.com',
        changeOrigin: true,
        headers: {
            Cookie: convertCookies({
                PHPSESSID: 'ch4cdhdk6q655sc3btc96ektc0',
                lang: 'zh-tw',
                langx: 'zh-tw',
                langcode: 'zh-tw',
                sid: 'ne70ff16z2jmbnmuz1nmzj5z1',
                rd3_host: 'http%3A%2F%2Fadmin.vir777.com'
            })
        }
    },
    '/m': {
        target: 'http://local.vir888.net',
        changeOrigin: true
    }
};
