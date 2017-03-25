var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var browserSync = require('browser-sync').create();
var spa = require('browser-sync-spa');
var htmlInjector = require('bs-html-injector');
var proxyMiddleware = require('http-proxy-middleware');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();
var webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf')

webpackConfig.entry.vendor.push('webpack-hot-middleware/client?overlay=false&reload=true');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;
var compiler = webpack(webpackConfig);
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
var connectHistoryApiFallback = require('connect-history-api-fallback')();

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    quite: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    },
    noInfo: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
});
var middleware = [
  // serve webpack bundle output
  devMiddleware,
  // enable hot-reload and state-preserving
  // compilation error display
  hotMiddleware,
  // handle fallback for HTML5 history API
  connectHistoryApiFallback
];

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    middleware.push(proxyMiddleware(context, options))
})

compiler.apply(new DashboardPlugin(dashboard.setData));

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

browserSync.use(spa());
browserSync.use(htmlInjector);
browserSync.watch('*.jade').on('change', () => htmlInjector());

browserSync.init({
    port,
    open: false,
    // serve pure static assets
    serveStatic: [staticPath],
    server: {
        baseDir: 'dist',
        middleware
    },
    files: [
        'dist/**/*.*'
    ],
    logLevel: "silent",
    logPrefix: 'Ya',
    // logConnections: true
    logConnections: false,
    logFileChanges: false,
    logSnippet: false
});
