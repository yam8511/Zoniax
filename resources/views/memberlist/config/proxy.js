const convertCookies = (cookies) => {
    var result = '';
    Object.keys(cookies).forEach((key) => {
        result += `${key}=${cookies[key]};`;
    });

    return result;
};

module.exports = {
    '/infe': {
        target: './',
        changeOrigin: true,
        headers: {
            Cookie: convertCookies({
                SESSION_ID: 'add9c57cf3ce1f8eefd12053b0c2655a35fdc878',
                BBSESSID: 'add9c57cf3ce1f8eefd12053b0c2655a35fdc878',
                lang: 'zh-tw',
                langx: 'big5',
                langcode: 'zh-tw',
                sid: 'ne70ff16z2jmbnmuz1nmzj5z1',
                rd3_host: 'http%3A%2F%2Fadmin.vir777.com'
            })
        }
    },
    '/m': {
        target: './',
        changeOrigin: true
    }
};
